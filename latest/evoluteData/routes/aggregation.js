const mongoose = require('mongoose');

const AggregatedContainerStats = require('../models/AggregatedContainerStats');
const AggregatedNetworkStats = require('../models/AggregatedNetworkStats');
const AggregatedAvailabilityStats = require('../models/AggregatedAvailabilityStats');
const AggregatedErrorStats = require('../models/AggregatedErrorStats');

/*

 The API handles aggregated stats data requests, for example:
 GET http://localhost:3000/api/container_stats_aggregated/2016-08-01/2016-09-01/day/all_containers/all_values

 The generic URL pattern is:
 http://localhost:3000/api/container_stats_aggregated/:time_from/:time_to/:period/:lxc_id/:value_type
 where
 :time_from - start time, e.g. '2016-08-01' or '2016-08-01T15' or '2016-08-01T15:10'
 :time_to - finish time (the same format as :time_from)
 :period - aggregation time period, one of the values: 'month', 'day', 'week', 'hour', 'minute'
 :lxc_id - container ID. Possible values: 'all_containers' (for all the containers) or full container ID (e.g. '0bddc509f1efa2f1d2a6481b291b0fb413b653141ad056f80e737a4e50337ecd')
 :value_type - value type. Possible values are: 'all_values', 'cpu', 'memory', 'blkioRead', 'blkioWrite', 'networkRx', 'networkTx'
 */

/**
 * Creates container_stats_aggregated mongoose model class
 * @returns {class} Model class
 */
function createModelClass() {
  const containerStatsAggregatedSchema = new mongoose.Schema({
    _id: {
      type: String
    },
    value: {
      cpu: Number,
      memory: Number,
      blkioRead: Number,
      blkioWrite: Number,
      networkRx: Number,
      networkTx: Number,
      period: String,
      lxcId: String,
      timeFrom: String
    }
  });
  return mongoose.model('container_stats_aggregated', containerStatsAggregatedSchema, 'container_stats_aggregated');
}

function initialize(app) {
  const AggregatedContainerStats = createModelClass();

  app.get('/api/container_stats/aggregated/:time_from/:time_to/:period/:lxc_id/:value_type', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const lxcId = req.params['lxc_id'];
    const valueType = req.params['value_type'];

    AggregatedContainerStats.find({
      $and: [
        {'value.timeFrom': {$gte: timeFrom, $lte: timeTo}},
        {'value.period': period},
        {'value.lxcId': lxcId === 'all_containers' ? null : lxcId}
      ]
    }, (err, models) => {
      if (err) {
        console.log('ERROR', err);
        res.send({error: true});
      } else {
        models = models || [];
        if (valueType === 'all_values') {
          res.send(models);
        } else {
          res.send(models.map((model) => {
            let value = {
              period: model.value.period,
              lxcId: model.value.lxcId,
              timeFrom: model.value.timeFrom
            };
            value[valueType] = model.value[valueType];
            return {
              _id: model._id,
              value: value
            };
          }));
        }
      }

    });

  });


  app.get('/api/network_stats/aggregated/:time_from/:time_to/:period/:node', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const node = req.params['node'];

    AggregatedNetworkStats.find({
      $and: [
        {'value.timeFrom': {$gte: timeFrom, $lte: timeTo}},
        {'value.period': period},
        {'value.node': node === 'all_nodes' ? null : node}
      ]
    }, (err, models) => {
      if (err) {
        console.log('ERROR', err);
        res.send({error: true});
      } else {
        models = models || [];
        res.send(models);
      }

    });

  });

  app.get('/api/availability_stats/aggregated/:time_from/:time_to/:period/:node', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const node = req.params['node'];

    AggregatedAvailabilityStats.find({
      $and: [
        {'value.timeFrom': {$gte: timeFrom, $lte: timeTo}},
        {'value.period': period},
        {'value.node': node === 'all_nodes' ? null : node}
      ]
    }, (err, models) => {
      if (err) {
        console.log('ERROR', err);
        res.send({error: true});
      } else {
        models = models || [];
        res.send(models);
      }

    });

  });


  app.get('/api/error_stats/aggregated/:time_from/:time_to/:period/:lxc_id', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const lxcId = req.params['lxc_id'];

    AggregatedErrorStats.find({
      $and: [
        {'value.timeFrom': {$gte: timeFrom, $lte: timeTo}},
        {'value.period': period},
        {'value.lxcId': lxcId === 'all_containers' ? null : lxcId}
      ]
    }, (err, models) => {
      if (err) {
        console.log('ERROR', err);
        res.send({error: true});
      } else {
        models = models || [];
        res.send(models);
      }

    });
  });

  console.log('Aggregated Stats API initialized.');
}

module.exports = {
  initialize: initialize
};
