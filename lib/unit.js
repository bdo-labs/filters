
/**
 * Expose unit initialization.
 */

module.exports = function(app){
  app.filter('unit', unit);
};

/**
 * This simple filter adds a unit to the input string. If the input is not a
 * string or empty, it will pass it on.
 */

function unit() {
  return function (input, unit) {
    return input && typeof input === 'string' ? input + unit : input;
  }
}
