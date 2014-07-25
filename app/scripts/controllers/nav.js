define([
  'marionette',
  'data/movies',
  'models/movies',
  'views/movielist',
  'views/moviedetails'
],

function (Marionette, data, Movies, MovieListView, MovieDetailsView) {
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
        model: this.movies.at(0)
      }))
      this.region.show(new MovieDetailsView({
    }
  });

  return NavController;
});
