define([
  'marionette',
  'data/movies',
  'models/movies',
  'views/movielist',
  'views/movie'
],

function (Marionette, data, Movies, MovieListView, MovieView) {
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
      this.region.show(new MovieView({
        model: this.movies.at(0)
      }))
    }
  });

  return NavController;
});
