/*global module*/
'use strict';

module.exports = {
  options: {
    config: '.jscs.json',
  },
  code: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
  test: ['test/spec/{,*/}*.js'],
  grunt: ['Gruntfile.js', 'tasks/{,*/}*.js']
};
