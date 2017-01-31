const axios = require('axios');
const _ = require('lodash');

const utils = require('../utils');
const felicityApi = require('../external/felicityApi');
const healthApi = require('../external/healthApi');
const AppInfo = require('../models/AppInfo');
const CurrentContainerStat = require('../models/CurrentContainerStat');

var getApplicationStatus = function (application) {
  return new Promise((resolve, reject) => {
    felicityApi.getApplicationStatus(application.appName).then(
      (result) => {
        application.status = result.data;
        resolve(application);
      },
      (error) => {
        console.error('Felicity error', error);
        reject(error);
    });
  });
}

var getApplicationUptime = function (application) {
  return new Promise((resolve, reject) => {
    felicityApi.getApplicationByName(application.appName).then(
      (result) => {
        application.uptime = result.data.app.version;
        resolve(application);
      },
      (error) => {
        console.error('Felicity error', error);
        reject(error);
    });
  });
}

var getNumberOfInstances = function (application) {
  return new Promise((resolve, reject) => {
    var regEx = new RegExp(application.appName);
    axios('http://127.0.0.1:3000/api/container_stats/current').then(
      (result) => {
        var JSONcontainers = result.data;
        var containersCount = _.filter(JSONcontainers, (item) => {item.container.name.match(regEx)}).length;
        application.instances = containersCount;
        resolve(application);
      },
      (error) => {
        console.error('Felicity error!');
        resolve(application);
    });
  });
}

function extractHealthResult(healthApiResult) {
  if (healthApiResult) {
    return _.filter(healthApiResult, (item) => item.Status !== 'passing').length;
  } else {
    return 0;
  }
}

// Not tested.
var getNumberOfErrors = function (application) {
  return new Promise((resolve, reject) => {
    CurrentContainerStat.find({}, 'container.name', (err, currentContainerStats) => {
      const containerNamePrefix = '/evo-' + application.name; //?

      const applicationContainersStats = _.filter(currentContainerStats,
        (stat) => stat.container && _.startsWith(stat.container.name, containerNamePrefix));

      _.each(applicationContainersStats, (item) => {
        healthApi.getContainerHealth(item.container.name.substring(1)).then((results) => {
          const sum = _.reduce(results, (total, x) => total + extractHealthResult(x.data), 0);
          application.errorCount = sum;
          resolve(application);
        })
      });
    });
  });
}

function initialize(app) {

  // TODO remove this later
  app.get('/api/applications/test', (req, res) => {
    getApplicationErrors('evo-cassandra-seed').then((result) => {
      res.send({errorCount: result});
    }, (error) => {
      console.error('Error', error);
      res.send({error: true});
    });
  });

  app.post('/api/app_infos', (req, res) => {
    var newId = utils.generateId();
    felicityApi.createApplication(req.body).then((felicityResult) => {
      const newAppInfo = new AppInfo({
        _id: newId,
        appName: req.body.appName,
          appExec: req.body.appExec,
          appType: 'application'
        //appStatus: req.body.appStatus,
        //appHealth: req.body.appHealth,
        //appUptime: req.body.appUptime
      });
      newAppInfo.save(function (err, createdApp) {
          console.log("logging created app")
          console.log(createdApp)
        res.send(createdApp);
      });
    }, (error) => {
      // Felicity error handler
      console.error('Felicity error occured', error);
    });
  });

  app.get('/api/app_infos', (req, res) => {
    AppInfo.find(function (err, applications) {
      felicityApi.getAllApplications().then((felicityResult) => {
        const felicities = felicityResult.data.apps;
        const applicationsWithFelicity = _.map(applications, (application) => {
          // NOTE the algorithm is full scan here, it can be optimized
          const felicity = _.find(felicities, (felicity) => felicity.id === '/' + application.appName);
          return felicity ? _.defaults({
            _id: application._id,
            appName: application.appName,
            appImage: application.appImage,
            appExec: application.appExec,
          }, {felicity}) : application;
        });

        const numberOfApps = applicationsWithFelicity.length;
        var updatedApps = 0;
        _.each(applicationsWithFelicity, (application) => {
          updatedApps++;
          getApplicationStatus(application)
            .then(getApplicationUptime)
            .then(getNumberOfInstances)
            // .then(getNumberOfErrors) // commented because I couldn't test this function
            .then((application) => {
              if (updatedApps == numberOfApps) {
                res.send(applicationsWithFelicity);
              }
            });
        });
      });
    });
  });

  app.patch('/api/app_infos', (req, res) => {
    AppInfo.findOne({_id: req.body._id}).then((currentAppInfo) => {
      const appInstanceCount = req.body.appInstanceCount;
      if (appInstanceCount) {
        // We need to update instance count via Felicity API call
        felicityApi.scaleApplication(currentAppInfo.appName, appInstanceCount).then((felicityResult) => {
          // TODO improve call result
          res.send({});
        }, (error) => {
          // Felicity error handler
          console.error('Felicity error occurred', error);
        });
      }
    });

  });


  /**
   * @api DELETE /api/app_infos
   * Delete the application with selected id
   */
  app.delete('/api/app_infos/:id', (req, res) => {
    AppInfo.findByIdAndRemove(new Object(req.params.id), function(err, application_info) {
      if(err) {
        res.status(500);
        res.json({
          type: false,
          data: "Error occured: " + err
        });
      }else{
        felicityApi.deleteAllApplication(application_info.appName).then((felicityResult) => {
          res.json({
            type: true,
            data: 'Application info: ' + req.params.id + ", " + application_info.appName + " deleted successfully"
          });
        });
      }
    });
  });

  console.log('Applications API initialized.');
}

module.exports = {
  initialize
};
