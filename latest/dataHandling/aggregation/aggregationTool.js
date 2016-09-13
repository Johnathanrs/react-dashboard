/**
 * Aggregation configuration object
 */
const configuration = {
  mongo: {
    url: 'mongodb://localhost:27017/evolute',
    sourceCollectionName: 'container_stats',
    targetCollectionName: 'container_stats_aggregated'
  },
  dateRange: {
    from: '2016-08-20',
    to: '2016-08-25'
  },
  aggregationPeriods: ['week', 'day', 'hour']
};

// Imports
const MongoClient = require('mongodb').MongoClient;
const aggregatorFactory = require('./aggregatorFactory');


/**
 * Performs a single map-reduce MongoDB aggregation
 * @param aggregator {function} aggregator function
 * @param period {string} aggregation period
 * @param lxcId {string} container ID
 * @returns {*}
 */
function performAggregation(aggregator, period, lxcId) {
  const containerLabel = lxcId ? 'container ' + lxcId : 'all containers';
  console.log(`Calling aggregator for ${containerLabel} with period ${period}...`);
  return aggregator(period, new Date(configuration.dateRange.from), new Date(configuration.dateRange.to), lxcId);
}

function performAllAggregations(db, sourceCollection, lxcIds) {
  console.log(`Starting aggregation: ${configuration.mongo.sourceCollectionName} --> ${configuration.mongo.targetCollectionName}`);
  lxcIds.unshift(null);
  let aggregator = aggregatorFactory(sourceCollection, configuration.mongo.targetCollectionName);
  let invocations = [];
  lxcIds.forEach((lxcId) => {
    configuration.aggregationPeriods.forEach((period) => {
      invocations.push({
        lxcId: lxcId,
        period: period
      })
    });
  });
  let invocationIndex = -1;

  function invokeNextAggregation() {
    invocationIndex++;
    if (invocationIndex >= invocations.length) {
      console.log('Aggregation completed.');
      db.close();
      return;
    }
    const invocation = invocations[invocationIndex];
    performAggregation(aggregator, invocation.period, invocation.lxcId).then((targetCollection) => {
      setTimeout(() => {
        invokeNextAggregation();
      }, 0);
    }, (error) => {
      console.log('AGGREGATION ERROR', error);
      db.close();
    });
  }

  invokeNextAggregation();
}

MongoClient.connect(configuration.mongo.url).then((db) => {
  let sourceCollection = db.collection(configuration.mongo.sourceCollectionName);
  db.createCollection(configuration.mongo.targetCollectionName).then((targetCollection) => {
    sourceCollection.distinct('lxc_id').then((lxcIds) => {
      performAllAggregations(db, sourceCollection, lxcIds);
    });
  });
});
