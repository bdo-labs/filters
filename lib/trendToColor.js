angular.module('filters').filter('trendToColor', function () {
	return function (trend) {
		if (isNaN(trend)) return '';

		if (trend > 0) return 'good';
		if (trend < 0) return 'danger';
		return 'warning';
	}
})