/* global requirejs */
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

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
    },
    modal: {
      deps: ['marionette'],
      exports: 'Backbone.Marionette.Modals'
    },
    smoothScroll: {
      exports: 'smoothScroll'
    },
    chosen: ['jquery'],
  },
  paths: {
    // bower_components
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    syphon: '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
    text: '../bower_components/requirejs-text/text',
    json: '../bower_components/requirejs-plugins/src/json',
    fixtures: '../fixtures',
    // vendor
    handlebars: 'vendor/handlebars',
    // others
    templates: '../../.tmp/scripts/templates'
  },

  config: {
    replace: {
      pattern: 'data/nls',
      // give the full path for karma,
      // it's not working with the relative
      value: '/base/app/data/en'
    }
  },

  // ask Require.js to load these files (all our tests)
  //deps: tests.concat(['jquery', 'underscore']),
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
