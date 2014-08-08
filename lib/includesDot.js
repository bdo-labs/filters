angular.module('filters').filter('includesDot', function () {
	return function (string) {
		return string.indexOf('.') !== -1;
	}
});