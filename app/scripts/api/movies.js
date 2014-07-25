define([
  'models/movies',
  'data/movies'
],

function (Movies, defaults) {
  'use strict';

  // the idea of this helper function is double. Provide a default
  // movies collection which may be overriden at any time.
  // Another idea is to wrap the specificity of the response, which here
  // is the need to use the `d` property. Consumers should not know anything
  // about the format of the data. Instead they want a movies collection, period.
  // And last but not least, this is to illustrate the importance of
  // always testing your code.
  return function (data) {
    var d = data || defaults;

    return new Movies(data.d);
  };
})
