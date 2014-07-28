/* jshint expr: true*/
define([
  'marionette',
  'controllers/nav'
], function (Marionette, NavController) {
  'use strict';

  // unit test suite on nav controller
  describe('nav controller', function () {
    var element = document.createElement('div');
    element.className = 'content';

    // hook running before each test
    beforeEach(function () {
      document.body.appendChild(element);

      var region = new Marionette.Region({
        el: '.content'
      });

      this.controller = new NavController({
        region: region
      });
    });

    // hook running after each test
    afterEach(function () {
      this.controller.destroy();
      this.controller = null;

      document.body.removeChild(element);
    });

    // tests on list()
    describe('list()', function () {
      it('should render the movie list view', function () {
        // query the after
        var view = this.controller.list().currentView;
      });

      it('should render the same number of items', function () {

      });
    });

    // tests on showMovie()
    describe('showMovie()', function () {
      it('should render the movie details view', function () {

      });

      it('should render the expected movie', function () {

      });
    });
  });

});
