/*global module*/
'use strict';

module.exports = {
  options: {
    config: '.jscs.json',
  },
  code: '<%= jshint.code %>',
  test: ['test/spec/{,*/}*.js'],
  grunt: ['Gruntfile.js', 'tasks/{,*/}*.js']
};
