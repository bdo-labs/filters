/**
 * Transforms an ISO 8601 time interval to an approximate human readable
 * interval, eg.
 * 'P1H' becomes 'hourly'
 * 'P1D2H' becomes 'daily'
 * 'p1M' becomes 'monthly'
 * ...and so on.
 *
 * This filter is currently hard coded for Norwegian!
 */

angular.module('filters').filter('timeInterval', function () {


	/**
	 * Combines the given durations and outputs an approximation to their given
	 * duration in minutes.
	 */
	function toMinutes(years, months, weeks, days, hours, minutes, seconds) {
		return (parseFloat(seconds) || 0)/60 + (parseFloat(minutes) || 0) +
			60 * (
				(parseFloat(hours) || 0) + 24 * (
					(parseFloat(days) || 0) +
					7 * (parseFloat(weeks) || 0) +
					30.4375 * (parseFloat(months) || 0) +
					365.25 * (parseFloat(years) || 0)
				)
			);
	}

	return function (input) {
		if (typeof input !== 'string') {
			return '';
		}

		var iso8601format = /^P(?:([\.\d]+)Y)?(?:([\.\d]+)M)?(?:([\.\d]+)W)?(?:([\.\d]+)D)?(?:T(?:([\.\d]+)H)?(?:([\.\d]+)M)?(?:([\.\d]+)S)?)?$/,
			matches = input.match(iso8601format),
			minutes;

		if (!matches) {
			return '';
		}

		// Convert to minutes (this is as described just an approximation)
		minutes = toMinutes.apply(null, matches.slice(1));

		// Special cases
		if (minutes > 59 && minutes < 61) { // One hour
			return 'hver time';
		}

		if (minutes > 119 && minutes < 121) { //Two hours
			return 'annenhver time';
		}
		
		if (minutes > 2820 && minutes < 2940) { // Between 47 and 49 hours
			return 'annenhver dag';
		}

		if (minutes > 8640 && minutes < 11520) { // Between 6 and 8 days
			return 'ukentlig';
		}

		if (minutes > 38880 && minutes < 46080) { // Between 27 and 32 days
			return 'månedlig';
		}

		if (minutes > 1380 && minutes < 1500) { // Between 23 and 25 hours
			return 'daglig';
		}

		// The more general cases
		if (minutes < 120) { // Two hours
			return 'hvert ' + minutes.toFixed(0) + '. minutt';
		}

		if (minutes < 1440) { // Below 24 hours
			return 'hver ' + (minutes / 60).toFixed(0) + '. time';
		}

		if (minutes < 43830) { // Below 30.4375 days
			return 'hver ' + (minutes / 1440).toFixed(0) + '. dag';
		}

		if (minutes < 525960) { // Below 365.25 days
			return 'hver ' + (minutes / 43200).toFixed(0) + '. måned';
		}

		return 'hvert ' + (minutes / 525960).toFixed(0) + '. år';

	}
});
