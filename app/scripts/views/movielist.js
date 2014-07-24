define([
  'marionette',
  'templates',
  './movielistitem'
],

function (Marionette, templates, MovieListItemView) {
  'use strict';

  return Marionette.CollectionView.extend({
    childView: MovieListItemView
  });
});
