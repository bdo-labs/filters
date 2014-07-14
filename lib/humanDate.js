/**
 * Prints "I dag" for dates that have the same day, month, and year as today.
 * Functions as the date filter in all other cases.
 */
angular.module('filters').filter('humanDate', [
	'$filter',
	function ($filter) {

		/**
		 * Compares two date objects and returns true if they represent the same
		 * day, month and year.
		 */
		function isSameDay(date1, date2) {
			return date1.getYear() == date2.getYear() &&
				date1.getMonth() == date2.getMonth() &&
				date1.getDate() == date2.getDate();
		}

		return function (input, format) {
			if (!input || typeof input !== 'object') {
				return '';
			}

			return isSameDay(new Date(), input) ?
				'I dag' : $filter('date')(input, format);
		}

	}
]);
