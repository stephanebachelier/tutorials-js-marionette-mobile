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
  baseUrl: '/base/lib',

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
  bundles: {
    common: [
      'jquery',
      'underscore',
      'backbone',
      'marionette',
      'backbone.babysitter',
      'backbone.wreqr',
      'superagent',
      'fastclick',
      'handlebars'
    ],
    index: [
      'templates',
      'views/main',
      'views/about',
      'controllers/nav',
      'routers/router',
      'app',
      'index'
    ]
  },

  // ask Require', to load these files (all our tests)
  //deps: tests.concat(['jquery', 'underscore']),
  deps: tests,

  // start test run, once Require', is done
  callback: window.__karma__.start
});
