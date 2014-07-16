describe('The termToIcon filter', function () {
	beforeEach(module('filters'));

	var termToIconFilter;

	beforeEach(inject(function ($filter){
		termToIconFilter = $filter('termToIcon');
	}));

	it('should exist', function () {
		expect(termToIconFilter).not.toBeNull();
	});

	it('should return an upward arrow for the term \'up\'', function () {
		expect(termToIconFilter('up')).toEqual('fa-arrow-up');
	});

	it('should return an empty string for unsupported terms', function () {
		expect(termToIconFilter('unsupported term')).toEqual('');
	});	
});