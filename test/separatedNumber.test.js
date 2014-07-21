describe('separated number filter', function () {
	var separatedNumberFilter;

	beforeEach(function () {
		module('filters');

		inject(function ($filter) {
			separatedNumberFilter = $filter('separatedNumber');
		});
	});

	it('should exist', function () {
		expect(typeof separatedNumberFilter).toBe('function');
	});

	it('should return the same number for numbers below 1000 and above -1000', function () {

		expect(separatedNumberFilter(100)).toBe('100');
		expect(separatedNumberFilter(0)).toBe('0');
		expect(separatedNumberFilter(-100)).toBe('-100');

	});

	it('should add a (non-breaking) space after the first 3 digits', function () {
		expect(separatedNumberFilter(1000)).toBe('1\u00a0000');
		expect(separatedNumberFilter(10000)).toBe('10\u00a0000');
		expect(separatedNumberFilter(100000)).toBe('100\u00a0000');

		expect(separatedNumberFilter(-1000)).toBe('-1\u00a0000');
		expect(separatedNumberFilter(-10000)).toBe('-10\u00a0000');
		expect(separatedNumberFilter(-100000)).toBe('-100\u00a0000');
	});

	it('should add (non-breaking) space after the first 6 digits', function () {
		expect(separatedNumberFilter(1000000)).toBe('1\u00a0000\u00a0000');
		expect(separatedNumberFilter(10000000)).toBe('10\u00a0000\u00a0000');

		expect(separatedNumberFilter(-1000000)).toBe('-1\u00a0000\u00a0000');
		expect(separatedNumberFilter(-10000000)).toBe('-10\u00a0000\u00a0000');
	});

	it('should limit decimals to specified number', function () {
		expect(separatedNumberFilter(0.12345, 2)).toBe('0.12');
		expect(separatedNumberFilter(0.12345, 4)).toBe('0.1235');
	});
	
});
