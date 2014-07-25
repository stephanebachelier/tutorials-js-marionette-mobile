define([
  'backbone',
  'controllers/nav',
  'routers/router',
  'api/movies'
],

function (Backbone, NavController, Router, getMovies) {
  'use strict';

  return function (options) { // jshint unused:false
    var app = new Backbone.Marionette.Application();

    app.addRegions({
      header: 'header',
      content: '.content',
      footer: 'nav'
    });

    app.addInitializer(function () {
      this.router = new Router({
        controller: new NavController({
          region: app.content,
          movies: getMovies()
        })
      });
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
