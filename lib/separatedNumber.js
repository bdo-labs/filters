/**
 * Formats a number by adding spaces for separating groups and limiting the
 * number of decimals to the given number of places.
 */
angular.module('filters').filter('separatedNumber', function () {

	return function (input, precision) {
		if (typeof input !== 'number') {
			return '';
		}

		// Let's pretend all numbers are positive for now
		var negative = input < 0,
			input = (1 - 2*negative) * input,

			numString = precision ?
					input.toPrecision(precision) : Math.round(input).toFixed(0),

			decimalPosition = precision ?
					numString.indexOf('.') : numString.length,

			spaces, i, insertPosition;

		// Calculate number of spaces
		spaces = Math.floor((decimalPosition - 1)/3);

		// Add the calculated number of spaces
		for (i = 1; i <= spaces; i++) {
			insertPosition = decimalPosition - i*3;

			numString = numString.substring(0, insertPosition) +
					String.fromCharCode(160) +
					numString.substring(insertPosition);

		}

		// Handle negative numbers and return
		return (negative ? '-' : '') + numString;

	};

});
