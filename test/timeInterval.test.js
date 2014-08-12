describe('The timeInterval filter', function () {
	beforeEach(module('filters'));

	var timeIntervalFilter;

	beforeEach(inject(function ($filter){
		timeIntervalFilter = $filter('timeInterval');
	}));


	it('should exist', function () {
		expect(timeIntervalFilter).not.toBeNull();
	});

	it('should handle single hour', function () {
		expect(timeIntervalFilter('PT1H')).toBe('hver time');
	});

	it('should handle several months', function () {
		expect(timeIntervalFilter('P11M')).toBe('hver 11. måned');
	});

	it('should handle decimals', function () {
		expect(timeIntervalFilter('P11.1M')).toBe('hver 11. måned');
	});


	it('should be able to handle big numbers', function () {
		expect(timeIntervalFilter('P20000Y')).toBe('hvert 20000. år');
	});

	it('should silently ignore invalid input', function () {
		expect(function () {
			timeIntervalFilter(-1);
			timeIntervalFilter('anoehu');
			timeIntervalFilter();
		}).not.toThrow();

		expect(timeIntervalFilter(12)).toBe('');
		expect(timeIntervalFilter()).toBe('');
	});
});
