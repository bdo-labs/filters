/**
 * Returns the largest element in the provided array. The argument are compared
 * directly by default, but can also be compared using the provided property.
 *
 * If no single item is larger than all others, the first one will be returned.
 */
angular.module('filters').filter('max', function () {
	return function (input, orderProperty) {

		if (!angular.isArray(input) || !input.length) {
			return null;
		}

		if (typeof orderProperty !== 'string') {
			orderProperty = false;
		}

		var maxItem = input[0];

		input.forEach(function (item) {

			if (orderProperty && item[orderProperty] > maxItem[orderProperty] ||
					!orderProperty && item > maxItem) {
				maxItem = item;
			}

		});

		return maxItem;
	}
});
