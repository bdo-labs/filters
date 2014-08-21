
/**
 * Expose encircleIcon initialization
 */

module.exports = function(app){
  app.filter('encircleIcon', encircleIcon);
};

/**
 * Returns the encircled version of the Font Awesome
 * icon given as input.
 * Currently used only to transform trends into icons,
 * and will (silently) fail given an icon...:
 *
 * - with a name with more than one word (e.g. fa-pied-piper)
 * - with more than one modifier (e.g. fa-sort-amount-desc or fa-sort-numeric-asc)
 * - that is already encircled (e.g. fa-minus-circle)
 * - that does not have a circled variant
 *
 * For such cases, either modify the filter or use an fa-stack
 */

function encircleIcon() {
  return function (input) {
    if (typeof input === 'string') {
      var split = input.split('-');
      if (split.length < 2 || split[1].length == 0) {
        return input;
      }
      var encircled = split[0] + '-' + split[1] + '-circle',
      modifier = (split.length > 2 ? '-' + split[2] : '');
      return encircled + modifier;
    }
    return input;
  }
}

