define([
  'marionette',
  'views/main',
  'views/about'
],

function (Marionette, MainView, AboutView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    home: function () {
      this.region.show(new MainView());
    },

    about: function () {
      this.region.show(new AboutView());
    }
  });

  return NavController;
});
