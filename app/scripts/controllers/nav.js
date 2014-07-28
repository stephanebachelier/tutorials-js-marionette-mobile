define([
  'marionette',
  'models/movies',
  'views/movielist',
  'views/moviedetails'
],

function (Marionette, Movies, MovieListView, MovieDetailsView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
      this.movies = options.movies;
    },

    list: function () {
      return this.region.show(new MovieListView({
        collection: this.movies
      }));
    },

    showMovie: function (id) {
      this.region.show(new MovieDetailsView({
        model: this.movies.get(id)
      }));
    }
  });

  return NavController;
});
