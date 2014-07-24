define([
  'marionette',
  'backbone',
  'controllers/nav',
  'routers/router'
],

function (Marionette, Backbone, NavController, Router) {
  'use strict';

  return function (options) {
    var app = new Marionette.Application();

    app.addRegions({layout: options.el});

    app.addInitializer(function () {
      this.router = new Router({
        controller: new NavController({region: app.layout})
      });
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
