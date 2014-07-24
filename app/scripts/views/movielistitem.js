define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['movies/item'],
    tagName: 'li',
    className: 'table-view-cell media',

    serializeData: function () {
      var data = this.model.toJSON();
      data.image = data.i[0];
      delete data.i;
      return data;
    }
  });
});
