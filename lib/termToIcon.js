
module.exports = function(app){
  app.filter('termToIcon', termToIcon);
};

/**
 * Returns the Font Awesome icon class corresponding to the
 * term given in the input.
 * Currently used only to transform trends into icons.
 */

function termToIcon() {
  return function (input) {

    if (input === 'up') {
      return 'fa-arrow-up';
    }
    if (input === 'down') {
      return 'fa-arrow-down';
    }
    if (input === 'flat') {
      return 'fa-minus';
    }

    return '';
  }
}
