const configuration = {
  debug: false,
  mongo: {
    url: 'mongodb://localhost:27017/evolute',
    targetCollectionName: 'error_stats'
  },
  loadPolicy: {
    fileSystem: {
      basePath: '/var/lib/docker/containers/',
      glob: '**/*-json.log'
    }
  }
};

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const q = require('q');
const glob = require('glob');
const MongoClient = require('mongodb').MongoClient;

// Import error matching rules
const rules = require('./errorStatsExtractionTool.rules');

const isErrorLine = (line) => _.some(rules, (rule) => rule(line));

const loadPolicies = {
  fileSystem: function (options, listener) {
    function readErrorsFromFile(filePath) {
      const deferred = q.defer();
      let errors = [];
      const lineReader = readline.createInterface({
        input: fs.createReadStream(filePath)
      });
      lineReader.on('line', (line) => {
        isErrorLine(line) && errors.push(JSON.parse(line));
      });
      lineReader.on('close', () => {
        deferred.resolve(errors);
      });
      return deferred.promise;
    }

    glob(options.glob, {cwd: options.basePath, realpath: true}, (error, files) => {
      let processedFileCount = 0;
      files.forEach((filePath) => {
        const logFileName = path.basename(filePath);
        const lxcId = logFileName.substring(0, logFileName.length - '-json.log'.length);
        readErrorsFromFile(filePath).then((errors) => {
          listener.onContainerErrorsGot(lxcId, errors).then(() => {
            (++processedFileCount === files.length) && listener.onFinish();
          });
        });
      });

    });
  },
  http: function (options, listener) {
    // Implement later if necessary
  }
};

const loadPolicyName = () => _.keys(configuration.loadPolicy)[0];

function processErrors() {
  const deferred = q.defer();
  const policyName = loadPolicyName();
  const loadPolicy = loadPolicies[policyName];
  loadPolicy(configuration.loadPolicy[policyName], {
    onContainerErrorsGot(lxcId, errors) {
      const truncateTimeToMinutes = (time) => time.substring(0, 16);
      const groupedErrorCounts = _.countBy(errors, (error) => truncateTimeToMinutes(error.time));
      return storeErrorStatToMongo(lxcId, groupedErrorCounts);
    },
    onFinish() {
      deferred.resolve({});
    }
  });
  return deferred.promise;
}

let targetMongoCollection;
function storeErrorStatToMongo(lxcId, groupedErrorCounts) {
  const deferred = q.defer();
  const documentsToInsert = _.map(groupedErrorCounts, (errorCount, time) => ({errorCount, time, lxcId}));
  configuration.debug && console.log('Inserting... ', documentsToInsert);
  if (_.isEmpty(documentsToInsert)) {
    deferred.resolve();
  } else {
    targetMongoCollection.insertMany(documentsToInsert).then(() => {
      deferred.resolve();
    });
  }
  return deferred.promise;
}

MongoClient.connect(configuration.mongo.url).then((db) => {
  return db.createCollection(configuration.mongo.targetCollectionName).then((targetCollection) => {
    targetMongoCollection = targetCollection;
    processErrors().then(() => {
      console.log('Completed.');
      db.close();
    });
  });
});








