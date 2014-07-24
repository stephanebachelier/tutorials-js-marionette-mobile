/*global module*/
'use strict';

module.exports = {
  fixtures: {
    options: {
      stdout: true
    },
    command: '"./node_modules/.bin/yaml2json" fixtures --recursive --save'
  },
  data: {
    options: {
      stdout: true
    },
    command: '"./node_modules/.bin/yaml2json" data --recursive --save'
  }
};
