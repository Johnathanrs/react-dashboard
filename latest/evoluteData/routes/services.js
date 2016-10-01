const _ = require('lodash');

const utils = require('../utils');
const ServiceInfo = require('../models/ServiceInfo');

function initialize(app) {

  /**
   * @api GET /api/service_infos
   * Gets all the services
   */
  app.get('/api/service_infos', function (req, res) {
    ServiceInfo.find(function (err, data) {
      res.json(data);
    });
  });

  /**
   * @api POST /api/service_infos
   * Creates a new service
   */
  app.post('/api/service_infos', (req, res) => {
    const serviceData = {
      _id: utils.generateId(),
      svcName: req.body.svcName,
      svcApplications: _.map(req.body.svcApplications, (application) => application._id)
    };
    const newInstance = new ServiceInfo(serviceData);
    newInstance.save((err) => {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).send(newInstance);
      }
    });
  });

  /**
   * @api PATCH /api/service_infos
   * Modifies given service
   */
  app.patch('/api/service_infos', (req, res) => {
    utils.crud.modify(ServiceInfo, req, res);
  });

  app.get('/api/service_infos/apps', function (req, res) {
    ServiceInfo.aggregate([{
      "$limit": 200
    }, {
      "$project": {
        svcApplications: 1
      }
    }, {
      "$unwind": '$svcApplications'
    }, {
      "$lookup": {
        from: 'app_infos',
        localField: 'svcApplications',
        foreignField: '_id',
        as: 'app_info'
      }
    }, {
      "$group": {
        _id: '$_id',
        apps: {
          "$push": '$app_info'
        }
      }
    }, {
      "$lookup": {
        from: 'service_infos',
        localField: '_id',
        foreignField: '_id',
        as: 'service_info'
      }
    }], function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      res.json(result);
    });

  });

  console.log('Services API initialized.');
}

module.exports = {
  initialize
};
