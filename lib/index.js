
/**
 * Module dependencies.
 */
var angular = require('angular');

/**
 * Expose indicator-events.
 */
module.exports = angular.module('filters', []);

require('./timeInterval.js');
require('./humanDate.js');
require('./numToTrend.js');
require('./termToIcon.js');
require('./encircleIcon');
require('./max.js');
require('./separatedNumber.js');
require('./includesDot.js');
require('./unit.js');
