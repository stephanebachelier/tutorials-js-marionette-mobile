define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      movies: 'list',
      'movies/:id': 'showMovie',

    }
  });

  return Router;
});
