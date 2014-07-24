/*global module*/
'use strict';

module.exports = {
  dist: ['.tmp', '<%= yeoman.dist %>/*'],
  server: '.tmp',
  lib: ['.tmp',  '<%= yeoman.lib %>/*'],
  data: 'app/data',
  fixtures: 'app/fixtures'
};
