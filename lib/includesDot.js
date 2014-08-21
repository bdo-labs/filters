
/**
 * Expose includesDot initialization
 */

module.exports = function(app){
  app.filter('includesDot', includesDot);
};

/**
 * Does string have a dot '.'
 *
 * @param {String} string
 * @return {Boolean}
 */

function includesDot() {
  return function (str){
    return str.indexOf('.') !== -1;
  }
}

