define([
  'marionette',
  './movielistitem'
],

function (Marionette, MovieListItemView) {
  'use strict';

  return Marionette.CollectionView.extend({
    childView: MovieListItemView,
    tagName: 'ul',
    className: 'table-view'
  });
});
