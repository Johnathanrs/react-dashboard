const _ = require('lodash');

const utils = require('../utils');
const felicityApi = require('../external/felicityApi');
const AppInfo = require('../models/AppInfo');
const CurrentContainerStat = require('../models/CurrentContainerStat');
const HealthStats = require('../models/HealthStats');

var getApplicationStatus = function (application) {
  return new Promise((resolve, reject) => {
    felicityApi.getApplicationStatus(application.appName).then(
      (result) => {
        application.status = result.data;
        resolve(application);
      },
      (error) => {
        console.error('Felicity error', error);
        resolve(application);
    });
  });
}

var getApplicationUptime = function (application) {
  return new Promise((resolve, reject) => {
    felicityApi.getApplicationByName(application.appName).then(
      (result) => {
        application.uptime = result.data.app && result.data.app.version;
        resolve(application);
      },
      (error) => {
        console.error('Felicity error', error);
        resolve(application);
    });
  });
}

var getNumberOfInstances = function (application) {
  return new Promise((resolve, reject) => {
    CurrentContainerStat.find((err, containers) => {
      if(!err) {
        var numberOfInstances = _.filter(containers, (item) => {
          if(item.container.name.startsWith(`/evo-${application.appName}-`)) {
            return item;
          }
        }).length;
        application.instances = numberOfInstances;
        resolve(application);
      } else {
        console.error(err);
        resolve(application);
      }
    });
  });
}

var getNumberOfErrors = function (application) {
  return new Promise((resolve, reject) => {
    HealthStats.find((err, stats) => {
      if(!err) {
        var errorCount = 0;
        _.each(stats, (stat) => {
          if(stat.containerName.startsWith(`/evo-${application.appName}-`)) {
            errorCount += stat.health;
          }
        });
        application.errorCount = errorCount;
        resolve(application);
      } else {
        console.error(err);
        resolve(application);
      }
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
    AppInfo.find().lean().exec(function (err, applications) {
      if(!err) {
        const numberOfApps = applications.length;
        var updatedApps = 0;
        _.each(applications, (application) => {
          getApplicationStatus(application)
            .then(getApplicationUptime)
            .then(getNumberOfInstances)
            .then(getNumberOfErrors)
            .then(() => {
              updatedApps++;
              if (updatedApps == numberOfApps) {
                res.send(applications);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      }
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
