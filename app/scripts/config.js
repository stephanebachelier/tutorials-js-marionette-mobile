'use strict';

require.config({
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',
    handlebars: 'vendor/handlebars',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    syphon: '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
    text: '../bower_components/requirejs-text/text',
    json: '../bower_components/requirejs-plugins/src/json',
    replace: '../bower_components/require.replace/require.replace',
    fixtures: '../fixtures'
  },

  config: {
    replace: {
      // Replace `nls` with the locale of the navigator
      // It will be used to find the right `i18n.json` translation file.
      pattern: 'nls',
      value: 'en'
    }
  },

  deps: ['jquery', 'underscore']
});
