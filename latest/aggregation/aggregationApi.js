/*

The API handles aggregated stats data requests, for example:
 GET http://localhost:3000/api/container_stats_aggregated/2016-08-01/2016-09-01/day/all

The generic URL pattern is:
 http://localhost:3000/api/container_stats_aggregated/:time_from/:time_to/:period/:lxc_id
where
 :time_from - start time, e.g. '2016-08-01' or '2016-08-01T15' or '2016-08-01T15:10'
 :time_to - finish time (the same format as :time_from)
 :period - aggregation time period, one of the values: 'month', 'day', 'week', 'hour', 'minute'
 :lxc_id - container ID. Possible values: 'all' (for all the containers) or full container ID (e.g. '0bddc509f1efa2f1d2a6481b291b0fb413b653141ad056f80e737a4e50337ecd')
 */

/**
 * Creates container_stats_aggregated mongoose model class
 * @param mongoose Mongoose instance
 * @returns {class} Model class
 */
function createModelClass(mongoose) {
  const containerStatsAggregatedSchema = new mongoose.Schema({
    _id: {
      type: String
    },
    value: [
      {cpu: {type: Number}},
      {memory: {type: Number}},
      {blkioRead: {type: Number}},
      {blkioWrite: {type: Number}},
      {networkRx: {type: Number}},
      {networkTx: {type: Number}},
      {period: {type: String}},
      {lxcId: {type: String}},
      {timeFrom: {type: String}}
    ]
  });
  return mongoose.model('container_stats_aggregated', containerStatsAggregatedSchema, 'container_stats_aggregated');
}

function initialize(app, mongoose) {
  const ContainerStatsAggregated = createModelClass(mongoose);

  app.get('/api/container_stats_aggregated/:time_from/:time_to/:period/:lxc_id', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const lxcId = req.params['lxc_id'];

    ContainerStatsAggregated.find({
      $and: [
        {'value.timeFrom': {$gte: timeFrom, $lte: timeTo}},
        {'value.period': period},
        {'value.lxcId': lxcId === 'all' ? null : lxcId}
      ]
    }, (err, models) => {
      if (err) {
        console.log('ERROR', err);
        res.send({error: true});
      } else {
        res.send(models);
      }

    });

  });

  console.log('Aggregated Stats API initialized.');

}

module.exports = {
  initialize: initialize
};

