define([
  'marionette',
  'data/movies',
  'models/movies',
  'views/movielist'
],

function (Marionette, data, Movies, MovieListView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
      this.movies = new Movies(data.d);
    },

    list: function () {
      this.region.show(new MovieListView({
        collection: this.movies
      }));
    },

    showMovie: function (id) {
      console.log('movie ' + id);
    }
  });

  return NavController;
});
