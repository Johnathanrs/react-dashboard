const configuration = {
  debug: false,
  mongo: {
    url: 'mongodb://localhost:27017/evolute',
    targetCollectionName: 'availability_stats'
  },
  healthApiBaseUrl: 'http://health-api.evolute.io:8500/v1/health/node/',
  pollingIntervalMillis: 3000,
  nodeListReloadIntervalMillis: 60000
};

const _ = require('lodash');
const q = require('q');
const MongoClient = require('mongodb').MongoClient;
const request = require('request');

let mongoDatabase;
let targetMongoCollection;
let nodeList = [];

function currentTime() {
  return new Date();
}

function loadNodeList() {
  const deferred = q.defer();
  mongoDatabase.collection('current_container_infos').distinct('Names').then((result) => {
    console.log('Node list reloaded: ', result);
    nodeList = result;
    deferred.resolve(nodeList);
  });
  return deferred.promise;
}

function pollSingleNode(node) {
  const url = configuration.healthApiBaseUrl + node;
  //const url = `http://localhost:8500/v1/health/node/${node}`;
  request({
    method: 'GET',
    url: url
  }, (error, response, body) => {
    const parsedBody = JSON.parse(body);
    const status = parsedBody.Status;
    const documentToInsert = {
      node,
      time: currentTime(),
      status,
      availability: status === 'passing' ? 1 : 0
    };
    targetMongoCollection.insert(documentToInsert);
  });

}

function pollAllNodes() {
  nodeList.forEach((node) => {
    pollSingleNode(node);
  });
}

function startApiPolling() {
  setInterval(() => {
    pollAllNodes();
  }, configuration.pollingIntervalMillis);
}

function startNodeListReloading() {
  setInterval(() => {
    loadNodeList();
  }, configuration.nodeListReloadIntervalMillis);
}

MongoClient.connect(configuration.mongo.url).then((db) => {
  mongoDatabase = db;
  return db.createCollection(configuration.mongo.targetCollectionName).then((targetCollection) => {
    targetMongoCollection = targetCollection;
    loadNodeList().then(() => {
      startApiPolling();
      startNodeListReloading();
      console.log('Availability Data Extraction Tool started.');
    });
  });
});

