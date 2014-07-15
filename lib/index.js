
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
