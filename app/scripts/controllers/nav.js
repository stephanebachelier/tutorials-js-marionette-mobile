define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    }
  });

  return NavController;
});
