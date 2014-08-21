
/**
 * Module dependencies.
 */

var angular = require('angular');
var encircleIcon = require('./encircleIcon');
var humanDate = require('./humanDate.js');
var includesDot = require('./includesDot.js');
var max = require('./max.js');
var numToTrend = require('./numToTrend.js');
var separatedNumber = require('./separatedNumber.js');
var termToIcon = require('./termToIcon.js');
var timeInterval = require('./timeInterval.js');
var unit = require('./unit.js');

/**
 * Filters
 */

var filters = angular.module('filters', []);

/**
 * Pass filters onto modules.
 */

encircleIcon(filters);
humanDate(filters);
includesDot(filters);
max(filters);
numToTrend(filters);
separatedNumber(filters);
termToIcon(filters);
timeInterval(filters);
unit(filters);

/**
 * Expose `filters`.
 */

module.exports = function(app){
  app.module('filters', filters);
};

