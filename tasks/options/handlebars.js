/*global module*/
'use strict';

module.exports = function (grunt) {
  return {
    compile: {
      options: {
        amd: true,
        namespace: 'templates',
        processName: function (filePath) {
          var matches = filePath.match(new RegExp(grunt.config('yeoman').app + '\/scripts\/templates\/(.*).hbs'));
          return matches ? matches[1] : filePath;
        },
        processContent: function (content) {
          content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
          content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '');
          content = content.replace(/\n/g, '');
          return content;
        }
      },
      files: {
        '.tmp/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/**/*.hbs']
      }
    }
  };
};
