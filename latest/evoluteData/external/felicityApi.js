const _ = require('lodash');
const axios = require('axios');

//const baseUrl = 'http://localhost:8001';
//const baseUrl = 'http://52.88.125.22';
const baseUrl = 'http://felicity.evolute.io';

function paramsToString(params) {
  // TODO escape values as they come from user input
  return _.map(params, (val, key) => key + '=' + val).join('&');
}

function url(params) {
    const baseUrl = 'http://52.88.125.22';
    var http = require('http'),
    options = {method: 'HEAD', host: 'felicity.evolute.io', port: 80, path: '/'},
//    options = {method: 'HEAD', host: '52.88.125.22', port: 80, path: '/'},
    req = http.request(options, function(r) {
        
        console.log(JSON.stringify(r.headers));
        console.log(r.statusCode)
    });
//baseUrl=''
req.on('error', function (e) {
    console.log("error triggered")
    const baseUrl = 'http://52.88.125.22';
  // General error, i.e.
  //  - ECONNRESET - server closed the socket unexpectedly
  //  - ECONNREFUSED - server did not listen
  //  - HPE_INVALID_VERSION
  //  - HPE_INVALID_STATUS
  //  - ... (other HPE_* codes) - server returned garbage
  console.log("logging error from http request host felicity.evolute.io ");
  console.log(e);
    
});
req.on('data', function (response) {
    console.log("data triggered")
  const baseUrl = 'http://52.88.125.22';
//  response.on('data', function (chunk) {
//    body += chunk;
    
  });
req.on('success', function (response) {
    console.log("success triggered")
   const baseUrl = 'http://52.88.125.22';
//  response.on('data', function (chunk) {
//    body += chunk;
    
  });

req.end();

  return _.isEmpty(params) ? baseUrl + '/' : baseUrl + '/?' + paramsToString(params);
}

function getAllApplications() {
  return axios.get(url());
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
  return axios.post(url(params));
}


function scaleApplication(applicationName, instanceCount) {
  const params = {
    name: applicationName,
    scale: instanceCount
  };
  return axios.put(url(params));
}

function getApplicationStatus(applicationName) {
  const params = {
    name: applicationName,
    query: 'status'
  };
  return axios.get(url(params));
}

function deleteAllApplication(applicationName) {
  const params = {
    name: applicationName
  };
  return axios.delete(url(params));
}

module.exports = {
  getAllApplications,
  createApplication,
  scaleApplication,
  getApplicationStatus,
  deleteAllApplication
};
