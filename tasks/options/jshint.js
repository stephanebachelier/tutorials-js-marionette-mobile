/*global module*/
'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  gruntfile: {
    src: ['Gruntfile.js']
  },
  code: {
    src: [
      '<%= yeoman.app %>/scripts/{,*/}*.js',
      '!<%= yeoman.app %>/scripts/data/{,*/}*.js'
    ]
  },
  test: {
    src: ['test/spec/{,*/}*.js']
  }
};
