import moment from 'moment';
import _ from 'lodash';

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

export function determineServiceStatus(allApplications, serviceApplications) {
  const filteredApplications = _.filter(allApplications, (application) => _.includes(serviceApplications, application._id));
  var result = "-";
  if (filteredApplications.length > 0) {
    result = "Deployed";
    _.each(filteredApplications, (application) => {
      if (application.status && application.status.toLowerCase() !== "deployed") {
        result = "Undeployed";
      }
    });
  }
  return result;
}

export function determineServiceAvailability(allApplications, serviceApplications) {
  const filteredApplications = _.filter(allApplications, (application) => _.includes(serviceApplications, application._id));
  if (filteredApplications.length == 0) {
    return "-";
  } else {
    var appErrorsSum = 0;
    _.each(filteredApplications, (application) => {
      appErrorsSum += application.errorCount;
    });
    return isNaN(appErrorsSum) ? '-' : appErrorsSum / filteredApplications.length;
  }
}

export function getNumberOfAppsByType(allApplications, serviceApplications, type) {
  const filteredApplications = _.filter(allApplications, (application) => _.includes(serviceApplications, application._id));
  if (filteredApplications.length == 0) {
    return 0;
  } else {
    return _.filter(filteredApplications, (application) => _.includes(application, type)).length;
  }
}
