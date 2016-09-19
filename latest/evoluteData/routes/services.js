const ServiceInfo = require('../models/ServiceInfo');

function initialize(app, mongoose) {
  app.get('/api/service_infos', function (req, res) {
    ServiceInfo.find(function (err, data) {
      res.json(data);
    });
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
