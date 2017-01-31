import moment from 'moment';

export function formatUptime(uptime) {
  var version = moment(uptime);
  var duration = moment.duration(moment().diff(version));
  var days = parseInt(duration.asDays());
  var hours = parseInt(duration.asHours());
  var hours = hours - days*24;
  return `${days} days & ${hours} hours`;
}
