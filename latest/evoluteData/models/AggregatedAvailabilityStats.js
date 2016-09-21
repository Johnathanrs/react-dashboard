const mongoose = require('mongoose');

const aggregatedAvailabilityStatsSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  value: {
    availability: Number,
    period: String,
    node: String,
    timeFrom: String
  }
});

const AggregatedAvailabilityStats = mongoose.model('aggregated_availability_stats', aggregatedAvailabilityStatsSchema);

module.exports = AggregatedAvailabilityStats;
