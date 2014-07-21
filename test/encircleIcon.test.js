describe('The encircleIcon filter', function () {
	beforeEach(module('filters'));

	var encircleIconFilter;

	beforeEach(inject(function ($filter){
		encircleIconFilter = $filter('encircleIcon');
	}));

	it('should exist', function () {
		expect(encircleIconFilter).not.toBeNull();
	});

	it('should return the input if it is not a string', function () {
		expect(encircleIconFilter(null)).toEqual(null);
	});

	it('should return the input if it is not an icon', function () {
		expect(encircleIconFilter('fa-')).toEqual('fa-');
	});

	it('should handle a plain icon', function () {
		expect(encircleIconFilter('fa-minus')).toEqual('fa-minus-circle');
	});

	it('should handle an icon with a modifier', function () {
		expect(encircleIconFilter('fa-arrow-up')).toEqual('fa-arrow-circle-up');
	});

	it('should give an invalid icon string for an encircled icon', function () {
		expect(encircleIconFilter('fa-minus-circle')).toEqual('fa-minus-circle-circle');
	});
});