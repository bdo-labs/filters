/**
 * Returns the Font Awesome icon class corresponding to the
 * term given in the input.
 * Currently used only to transform trends into icons.
 */

angular.module('filters').filter('termToIcon', function () {
	return function (input) {

		if (input === 'up') {
			return 'fa-arrow-circle-up';
		}
		if (input === 'down') {
			return 'fa-arrow-circle-down';
		}
		if (input === 'flat') {
			return 'fa-minus-circle';
		}

		return '';
	}
});