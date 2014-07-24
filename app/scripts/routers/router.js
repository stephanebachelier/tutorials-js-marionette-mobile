define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'home',
      about: 'about'
    }
  });

  return Router;
});
