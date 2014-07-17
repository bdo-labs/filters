describe('max filter', function () {

	var maxFilter;

	beforeEach(function () {
		module('filters');

		inject(function ($filter) {
			maxFilter = $filter('max');
		});
	});

	it('should exist', function () {

		expect(typeof maxFilter).toBe('function');

	});

	it('should pick the largest number from array of numbers', function () {

		var largest = maxFilter([1, 2, 3, 8, 6, 7, 5, 8, 9, 1, 0, -23]);

		expect(largest).toBe(9);

	});

	it('should pick the object with largest property value', function () {

		var largest = maxFilter([
				{num: 1000},
				{num: 848},
				{num: 2342},
				{num: 698354},
				{num: 34234},
				{num: 221},
				{num: 984}
			], 'num');

		expect(largest).toBeDefined();
		expect(largest.num).toBe(698354);

	});


	it('should handle largest at end', function () {

		var largest = maxFilter([10, 2, 43, 3, 21, 98]);
		expect(largest).toBe(98);

	});


	it('should handle largest at start', function () {

		var largest = maxFilter([100, 2, 43, 3, 21, 98]);
		expect(largest).toBe(100);

	});

});
