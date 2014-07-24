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
    // zepto
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
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    templates: '../../.tmp/scripts/templates',
    jquery: '../bower_components/zeptojs/dist/zepto',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',
    marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    superagent: '../bower_components/superagent/superagent',
    fastclick: '../bower_components/fastclick/lib/fastclick'
  },

  // ask Require.js to load these files (all our tests)
  //deps: tests.concat(['jquery', 'underscore']),
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
