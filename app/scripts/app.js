define([
  'backbone',
  'controllers/nav',
  'routers/router'
],

function (Backbone, NavController, Router) {
  'use strict';

  return function (options) {
    var app = new Backbone.Marionette.Application();

    app.addRegions({
      header: 'header',
      content: '.content',
      footer: 'nav'
    });

    app.addInitializer(function () {
      this.router = new Router({
        controller: new NavController({region: app.content})
      });
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
