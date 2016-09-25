const _ = require('lodash');
const mongoose = require('mongoose');
const moment = require('moment');

const AggregatedContainerStats = require('../models/AggregatedContainerStats');
const AggregatedNetworkStats = require('../models/AggregatedNetworkStats');
const AggregatedHealthStats = require('../models/AggregatedHealthStats');
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

  app.get('/api/health_stats/aggregated/:time_from/:time_to/:period/:node', (req, res) => {
    const timeFrom = req.params['time_from'];
    const timeTo = req.params['time_to'];
    const period = req.params['period'];
    const node = req.params['node'];

    AggregatedHealthStats.find({
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

  app.get('/api/stats/aggregated/utilization/top5', (req, res) => {
    const now = moment();
    let maxNetwork;
    let maxBlkio;

    function maxForThreeMonths(paramName, paramNameIn, paramNameOut) {
      return AggregatedContainerStats.aggregate([
        {
          $match: {
            $and: [
              {'value.timeFrom': {$gte: now.subtract(3, 'months').format()}},
              {'value.period': 'day'}
            ]
          }
        },
        {
          $project: {
            calculatedValue: {$add: [`$value.${paramNameIn}`, `$value.${paramNameOut}`]}
          }
        },
        {
          $group: {
            _id: paramName,
            value: {
              $max: '$calculatedValue'
            }
          }
        }
      ]);
    }

    maxForThreeMonths('network', 'networkRx', 'networkTx').then((result) => {
      maxNetwork = result;
    }).then(maxForThreeMonths('blkio', 'blkioRead', 'blkioWrite').then((result) => {
      maxBlkio = result;
    })).then(() => {
      AggregatedContainerStats.find({
        $and: [
          {'value.timeFrom': {$gte: now.subtract(1, 'days').format()}},
          {'value.period': 'day'}
        ]
      }).sort('-value.cpu').limit(5).exec((err, models) => {
        const resultModels = _.map(models, (model) => {
          const blkio = maxBlkio > 0 ? (model.value.blkioRead + model.value.blkioWrite) / maxBlkio : 1;
          const network = maxNetwork > 0 ? (model.value.networkRx + model.value.networkTx) / maxNetwork : 1;
          return {
            cpu: model.value.cpu,
            memory: model.value.memory,
            blkio: blkio > 1 ? 1 : blkio,
            network: network > 1 ? 1 : network
          };
        });
        res.send(resultModels);
      });
    });

  });

  app.get('/api/stats/aggregated/availability/bottom5', (req, res) => {

  });

  console.log('Aggregated Stats API initialized.');
}

module.exports = {
  initialize: initialize
};
