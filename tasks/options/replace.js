/*global module*/
'use strict';

module.exports = {
  requirejs: {
    options: {
      patterns: [{
        match: /bower_components\/requirejs\/require.js/g,
        replacement: 'scripts/require.js'
      }],
      usePrefix: false
    },
    files: [{
      src: ['<%= yeoman.dist %>/index.html'],
      dest: '<%= yeoman.dist %>/index.html'
    }]
  }
};
