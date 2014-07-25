define([
  'marionette',
  'templates',
  './movielistitem'
],

function (Marionette, templates, MovieListItemView) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['movies/details'],
    className: 'media',

    serializeData: MovieListItemView.prototype.serializeData
  });
});
