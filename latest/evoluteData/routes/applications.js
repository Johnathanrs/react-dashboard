const utils = require('../utils');
const AppInfo = require('../models/AppInfo');

function initialize(app) {
  app.use('/api/app_infos', function (req, res) {
    console.log("generating id: ");
    var newId = utils.generateId();
    console.log("logging new id: " + newId);

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
    console.log("Request body plain");
    console.log(req.body);
    console.log("Parsing received JSON");
    console.log(req.body.appName);

    var newApp = new AppInfo({
      _id: newId,
      appName: req.body.appName,
      appStatus: req.body.appStatus,
      appHealth: req.body.appHealth,
      appUptime: req.body.appUptime
    });
    console.log(newApp.appName);
    newApp.save(function (err, newApp) {
      if (err) return console.error(err);
    });

  });

  app.use('/api/application/:app_id/count', function (req, res) {
    var querystring = `^${req.params.app_id}`;
//var query = `$(/${querystring}.*/)`
    var regEx = new RegExp(querystring);
    var containerNames = [];
    var testarray = [];
    request({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/container_stats/current'
    }, function (error, response, body) {
      if (error) {
        console.log("Made it to /api/application/:app_id/count2 error");
        res.json(502, {
          error: "bad_gateway",
          reason: err.code
        });
        return;
      }
      if (!error && response.statusCode == 200) {
        var responseString = (JSON.stringify(response));
        var responseJSON = JSON.parse(responseString);
        var containers = responseJSON.body;
        var containersJSON = JSON.parse(containers);

        containersJSON.forEach(function (containerItem, index, arr) {
          containerNames.push(containerItem.Names)
        });

        containerNames.forEach(function (containerNamesItem, index, arr) {
          var containerNamesItemElement = containerNamesItem[0];
          if (containerNamesItemElement.match(regEx)) {
            testarray.push(containerNamesItemElement)
          }
          return testarray.length;
        });

        console.log("loggin test array length");
        console.log(testarray.length);
        res.json(testarray.length);
      } else {
        console.log("something else happened when querying /api/health/container brother");
        console.log(response);
        console.log(body);
        res.send(body);
      }
    });
  });

  app.get('/api/app_infos', function (req, res) {
    AppInfo.find(function (err, data) {
      res.json(data);
    });
  });

  console.log('Applications API initialized.');
}

module.exports = {
  initialize
};

