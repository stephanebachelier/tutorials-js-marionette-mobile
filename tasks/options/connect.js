/*global module*/
'use strict';
var SERVER_PORT = 9000;
var LIVERELOAD_PORT = 35729;

var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = {
  options: {
    port: SERVER_PORT,
    hostname: '0.0.0.0'
  },
  livereload: {
    options: {
      middleware: function (connect) {
        return [
          lrSnippet,
          mountFolder(connect, '.tmp'),
          mountFolder(connect, 'app')
        ];
      }
    }
  },
  doc: {
    options: {
      port: 3003,
      base: '<%= yeoman.doc %>'
    }
  }
};
