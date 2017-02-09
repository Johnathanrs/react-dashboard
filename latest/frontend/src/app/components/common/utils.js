import moment from 'moment';

export function formatUptime(uptime) {
  const diff = moment.duration(moment().diff(uptime));
  var units = 0;
  if(diff._data.years != 0) {
    units = Math.round(diff.asYears());
    if(units == 1) {
      return "a year";
    } else {
      return units + " years";
    }
  } else if (diff._data.months >= 3) {
    units = Math.round(diff.asMonths());
    if(units == 1) {
      return "a month";
    } else {
      return units + " months";
    }
  } else if (diff._data.months < 3 && diff._data.months > 0) {
    units = Math.round(diff.asWeeks());
    if(units == 1) {
      return "a week";
    } else {
      return units + " weeks";
    }
  } else if (diff._data.days != 0) {
    units = Math.round(diff.asDays());
    if(units == 1) {
      return "a day";
    } else {
      return units + " days";
    }
  } else if (diff._data.hours != 0) {
    units = Math.round(diff.asHours());
    if(units == 1) {
      return "an hour";
    } else {
      return units + " hours";
    }
  } else {
    units = Math.round(diff.asMinutes) + " minutes";
    if(units == 1) {
      return "a minute";
    } else {
      return units + " minutes";
    }
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function trimAppImage(appImage) {
  var result = "";
  if(appImage) {
    result = appImage.split('/')[1];
  }
  return result;
}

export function shortenAppImage(appImage) {
  if(appImage && appImage.length >= 20) {
    return appImage.slice(0,12) + "..." + appImage.slice(-5);
  } else {
    return appImage;
  }
}
