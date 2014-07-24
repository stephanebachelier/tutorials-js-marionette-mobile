/*global module*/
'use strict';

module.exports = {
  options: {
    nospawn: true,
    livereload: true
  },
  livereload: {
    options: {
      livereload: '<%= yeoman.livereload %>'
    },
    files: [
      '<%= yeoman.app %>/*.html',
      '.tmp/styles/{,*/}*.css',
      '.tmp/scripts/{,*/}*.js',
      '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
      'test/spec/**/*.js'
    ]
  },
  gruntfile: {
    files: [
      '<%= jshint.gruntfile.src %>',
      'tasks/{,*/}*.js'
    ],
    tasks: ['jshint:gruntfile', 'jscs:grunt', 'lintspaces:grunt'],
  },
  code: {
    files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
    tasks: ['lint-code']
  },
  handlebars: {
    files: [
      '<%= yeoman.app %>/scripts/templates/**/*.hbs'
    ],
    tasks: ['handlebars']
  },
  test: {
    files: ['test/spec/**/*.js'],
    tasks: ['lint-test', 'karma:unit:run']
  },
  compass: {
    files: ['<%= yeoman.app %>/{,*/}*.scss'],
    tasks: ['concurrent']
  },
  json: {
    files: ['<%= jsonlint.target.src %>'],
    tasks: ['jsonlint']
  },
  data: {
    files: ['data/**/*.yaml'],
    tasks: ['data']
  },
  fixtures: {
    files: ['fixtures/**/*.yaml'],
    tasks: ['fixtures']
  }
};
