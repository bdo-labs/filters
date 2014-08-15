/**
 * This simple filter adds a unit to the input string. If the input is not a
 * string or empty, it will pass it on.
 */
angular.module('filters').filter('unit', function () {

	return function (input, unit) {

		return input && typeof input === 'string' ? input + unit : input;

	}

});
