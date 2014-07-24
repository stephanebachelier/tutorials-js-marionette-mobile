/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('buildit', function () {
    grunt.task.run([
      'useminPrepare',
      'requirejs:dist',
      'htmlmin',
      'concat',
      'cssmin',
      'uglify:dist',
      'copy:dist',
      'imagemin',
      'copy:requirejs',
      'uglify:requirejs',
      'replace:requirejs',
      'filerev',
      'usemin'
    ]);
  });
};
