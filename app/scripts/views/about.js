define([
  'marionette',
  'templates',
  'fixtures/about'
],

function (Marionette, templates, fixtures) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.about,

    serializeData: function () {
      return fixtures;
    }

  });
});
