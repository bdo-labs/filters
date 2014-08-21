
/**
 * Expose humanDate initialization
 */

module.exports = function(app){
  app.filter('humanDate', ['$filter', humanDate]);
};

/**
 * Prints "I dag" for dates that have the same day,
 * month, and year as today. Functions as the date
 * filter in all other cases.
 */

function humanDate($filter) {
  return function (input, format) {
    if (!input instanceof Date) {
      return '';
    }
    return isSameDay(new Date(), input) ?
      'I dag' : $filter('date')(input, format);
  }
}

/**
  * Compare dates
  *
  * Compares two date objects and returns true if
  * they represent the same day, month and year.
  *
  * @param {Date} date1
  * @param {Date} date2
  */

function isSameDay(date1, date2) {
  return date1.getYear() == date2.getYear() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getDate() == date2.getDate();
}

