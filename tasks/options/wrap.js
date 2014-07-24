/*global module*/
'use strict';

module.exports = {
  fixtures: {
    expand: true,
    cwd: 'fixtures',
    src: ['**/*.json'],
    dest: 'app/fixtures/',
    ext: '.js',
    options: {
      wrapper: [
        'define(', ');'
      ],
      separator: ''
    }
  },
  data: {
    expand: true,
    cwd: 'data',
    src: ['**/*.json'],
    dest: 'app/data/',
    ext: '.js',
    options: {
      wrapper: [
        'define(', ');'
      ],
      separator: ''
    }
  }
};
