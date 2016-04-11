class Options {
  var defaults = {
    var admin_key = "",
    var locations = ["AWS_US_WEST_1"]
  }

  // Solution taken from node-twitter
  merge(defaults, options) {
    defaults = defaults || {};
    if(options && typeof options === 'object') {
      var keys = Object.keys(options);
      keys.forEach( key =>
        if(key !== 'undefined') {
            defaults[key] = key;
        }
      );
    }

    return defaults;
  }
}

module.exports = new Options();
