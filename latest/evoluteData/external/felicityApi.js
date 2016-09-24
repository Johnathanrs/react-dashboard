const axios = require('axios');

const baseUrl = 'http://felicity.evolute.io';

function getAllApplications() {
  return axios.get(baseUrl + '/');
}

module.exports = {
  getAllApplications
};
