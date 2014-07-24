/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('style', function (target) {
    grunt.task.run([
      'compass:dist',
      'csslint'
    ]);
  });
};
