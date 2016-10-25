const _ = require('lodash');
const q = require('q');

function initialize(app) {

  app.get('/api/visualizations/applicationOverview', (req, res) => {
    res.send(require('./mockData/visualizations-applicationOverview.json'));
  });

  app.get('/api/visualizations/systemUtilizationOverview', (req, res) => {
    res.send(require('./mockData/visualizations-systemUtilizationOverview.json'));
  });

  console.log('Visualizations API initialized.');
}

module.exports = {
  initialize
};


