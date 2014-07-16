describe('The timeInterval filter', function () {
	beforeEach(module('filters'));

	var numToTrendFilter;

	beforeEach(inject(function ($filter){
		numToTrendFilter = $filter('numToTrend');
	}));

	it('should exist', function () {
		expect(numToTrendFilter).not.toBeNull();
	});

	it('should return an empty string for non-number input', function () {
		expect(numToTrendFilter('upward')).toEqual('');
	});

	it('should identify a value of 0 as a flat trend', function () {
		expect(numToTrendFilter(0)).toEqual('flat');
	});

	it('should identify a value of 1 as an upward trend', function () {
		expect(numToTrendFilter(1)).toEqual('up');
	});

	it('should identify a small positive value as an upward trend', function () {
		expect(numToTrendFilter(Number.MIN_VALUE)).toEqual('up');
	});

	it('should identify a large positive value as an upward trend', function () {
		expect(numToTrendFilter(Number.MAX_VALUE)).toEqual('up');
	});

	it('should identify a value of -1 as a downward trend', function () {
		expect(numToTrendFilter(-1)).toEqual('down');
	});

	it('should identify a small negative value as a downward trend', function () {
		expect(numToTrendFilter(-(Number.MIN_VALUE))).toEqual('down');
	});

	it('should identify a large negative value as a downward trend', function () {
		expect(numToTrendFilter(-(Number.MIN_VALUE))).toEqual('down');
	});
});