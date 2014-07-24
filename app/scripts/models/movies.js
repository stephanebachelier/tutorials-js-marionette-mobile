define([
  'backbone',
  './movie'
],

function (Backbone, Movie) {
  'use strict';

  return Backbone.Collection.extend({
    model: Movie
  });
});
