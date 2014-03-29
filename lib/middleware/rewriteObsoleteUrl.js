// Generated by CoffeeScript 1.4.0
(function() {
  var utils, _rewriteObsoleteUrl;

  utils = require("../util");

  module.exports = _rewriteObsoleteUrl = function(options) {
    var reg;
    reg = /-(\d{16})/;
    if (!options.transfer) {
      return function(req, res, next) {
        return next();
      };
    }
    return function(req, res, next) {
      if (!utils.UrlConvert.PRODUCTION_REGEX.test(req.url)) {
        return next();
      }
      if (req.query.no_dependencies) {
        return next();
      }
      if (reg.test(req.url)) {
        req.url = req.url.replace(reg, '@$1');
      }
      return next();
    };
  };

}).call(this);