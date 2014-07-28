/* jshint expr: true*/
define([
  'api/movies',
  'data/movies'  // our fixtures
], function (getMovies, data) {
  'use strict';

  // unit test suite on nav controller
  describe('getMovies helper', function () {
    it('should have the correct number of elements', function () {
      var movies = getMovies(data);
      movies.length.should.eq(8);
    })
  });
});
