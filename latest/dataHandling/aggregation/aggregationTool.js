/**
 * Aggregation configuration object
 */
const configuration = {
  mongo: {
    url: 'mongodb://localhost:27017/evolute'
  },
  dateRange: {
    from: '2016-08-20',
    to: '2016-08-25'
  },
  aggregationPeriods: ['week', 'day', 'hour'],
  aggregations: [
    {
      name: 'Container Stats',
      aggregatorFactory: require('./aggregatorFactory.containerStats'),
      sourceCollectionName: 'container_stats',
      targetCollectionName: 'container_stats_aggregated'
    }
  ]
};

// Imports
const MongoClient = require('mongodb').MongoClient;
const q = require('q');

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

function performAggregationsWithAllParameters(db, sourceCollection, targetCollection, lxcIds, aggregation) {
  console.log(`Starting aggregation: ${aggregation.sourceCollectionName} --> ${aggregation.targetCollectionName}`);
  lxcIds.unshift(null);
  const aggregator = aggregation.aggregatorFactory(sourceCollection, aggregation.targetCollectionName);
  let invokers = [];
  lxcIds.forEach((lxcId) => {
    configuration.aggregationPeriods.forEach((period) => {
      invokers.push(function () {
        const lxcIdParameter = lxcId;
        const periodParameter = period;
        return performAggregation(aggregator, periodParameter, lxcIdParameter);
      })
    });
  });
  invokers.push(function () {
    console.log(`${aggregation.name} aggregation completed.`);
  });
  return invokers.reduce((soFar, f) => soFar.then(f), q());
}

function aggregationExecutorFactory(aggregation, db) {
  return function () {
    const sourceCollection = db.collection(aggregation.sourceCollectionName);
    return db.createCollection(aggregation.targetCollectionName).then((targetCollection) => {
      return sourceCollection.distinct('lxc_id').then((lxcIds) => {
        return performAggregationsWithAllParameters(db, sourceCollection, targetCollection, lxcIds, aggregation);
      });
    });
  }
}

MongoClient.connect(configuration.mongo.url).then((db) => {
  const aggregationExecutors = configuration.aggregations.map((aggregation) => aggregationExecutorFactory(aggregation, db));
  return aggregationExecutors.reduce((soFar, f) => soFar.then(f), q());
});
