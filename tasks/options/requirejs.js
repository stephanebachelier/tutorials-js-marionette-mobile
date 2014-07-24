/*global module*/
'use strict';

module.exports = {
  dist: {
    // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    options: {
      baseUrl: '<%= yeoman.app %>/scripts',
      optimize: 'none',
      out: '<%= yeoman.dist %>/scripts/main.js',
      name: 'main',
      mainConfigFile: '<%= yeoman.app %>/scripts/config.js',
      paths: {
        templates: '../../.tmp/scripts/templates'
      },
      // TODO: Figure out how to make sourcemaps work with grunt-usemin
      // https://github.com/yeoman/grunt-usemin/issues/30
      //generateSourceMaps: true,
      // required to support SourceMaps
      // http://requirejs.org/docs/errors.html#sourcemapcomments
      preserveLicenseComments: false,
      useStrict: true,
      wrap: true
      //uglify2: {} // https://github.com/mishoo/UglifyJS2
    }
  },
  lib: {
    options: {
      baseUrl: '<%= yeoman.app %>/scripts',
      optimize: 'none',
      dir: '.tmp/<%= yeoman.lib %>',
      mainConfigFile: '<%= yeoman.app %>/scripts/config.js',
      paths: {
        templates: '../../.tmp/scripts/templates',
      },
      removeCombined: true,
      modules: [
        {
          name: 'index',
          exclude: [
            'jquery',
            'underscore',
            'backbone',
            'handlebars',
            'marionette',
            'backbone.babysitter',
            'backbone.wreqr',
            'superagent',
            'fastclick'
          ]
        },
        {
          name: 'common',
          create: true,
          include: [
            'jquery',
            'underscore',
            'backbone',
            'handlebars',
            'marionette',
            'backbone.babysitter',
            'backbone.wreqr',
            'superagent',
            'fastclick'
          ]
        }
      ]
    }
  }
};
