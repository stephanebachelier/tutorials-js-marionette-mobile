/*global module*/
'use strict';

module.exports = function (grunt) {
  return {
    options: {
      jshint: grunt.file.readJSON('.jshintrc')
    },
    report: {
      files: {
        report: [
          '<%= yeoman.app/scripts/**/*.js',
          'test/*.js'
        ]
      }
    }
  };
};
