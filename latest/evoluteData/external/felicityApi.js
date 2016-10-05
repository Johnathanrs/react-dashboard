const _ = require('lodash');
const axios = require('axios');

//const baseUrl = 'http://felicity.evolute.io';
const baseUrl = 'http://localhost:8001';

function getAllApplications() {
  return axios.get(baseUrl + '/');
}

function createApplication(application) {
  const params = {
    name: application.appName,
    scale: application.appInstanceCount,
    cpu: '1',
    mem: '1',
    cmd: application.appExec,
    image: application.appImage
  };
  // TODO escape values as they come from user input
  const paramsAsUrlString = _.map(params, (val, key) => key + '=' + val).join('&');
  return axios.post(baseUrl + '/?' + paramsAsUrlString);
}

module.exports = {
  getAllApplications,
  createApplication
};
