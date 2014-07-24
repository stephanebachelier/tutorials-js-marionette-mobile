define([
  'app'
],

function (app) {
  'use strict';

  var module = function (options) {
    var el = options.el;
    if (!el) {
      throw new Error('region undefined.');
    }

    return app(options);
  };

  return module;
});
