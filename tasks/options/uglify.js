/*global module*/
'use strict';

module.exports = {
  dist: {
    files: {
      '<%= yeoman.dist %>/scripts/main.js': [
        '<%= yeoman.dist %>/scripts/main.js'
      ]
    }
  },
  requirejs: {
    files: {
      '<%= yeoman.dist %>/scripts/require.js': [
        '<%= yeoman.dist %>/scripts/require.js'
      ]
    }
  },
  lib: {
    files: {
      '<%= yeoman.lib %>/scripts/index.min.js': [
        '<%= yeoman.lib %>/scripts/index.js'
      ]
    }
  }
};
