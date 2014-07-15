/**
 * Returns the English word for a trend represented as a number,
 * where a positive value indicates an upward trend,
 * a negative value indicates a downward trend and 
 * zero indicates a flat trend.
 */

angular.module('filters').filter('numToTrend', function () {
	return function (input) {

		if (isNaN(input)) {
			return '';
		}
		if (input > 0) {
			return 'up';
		}
		if (input < 0) {
			return 'down';
		}
		if (input === 0) {
			return 'flat';
		}
	}
});
