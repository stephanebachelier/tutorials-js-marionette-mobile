/*global module*/
'use strict';

module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  strict: {
    options: {
      import: 2
    },
    src: ['.tmp/styles/{,*/}*.css']
  }
};
