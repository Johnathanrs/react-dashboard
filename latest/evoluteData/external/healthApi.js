const axios = require('axios');

const baseUrl = 'http://health-api.evolute.io:8500/v1/health/node/';

/**
 * Gets health information for a given container
 * @param containerName
 */
function getContainerHealth(containerName) {
  return axios.get(baseUrl + containerName);
}

module.exports = {
  getContainerHealth
};

