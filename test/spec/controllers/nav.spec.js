/* jshint expr: true*/
define(['controllers/nav'], function (NavController) {
  'use strict';

  describe('nav controller', function () {

    beforeEach(function () {
      this.controller = new NavController();
    });

    afterEach(function () {
      this.controller.close();
      this.controller = null;
    });

    it('should implement some tests', function () {
      true.should.be.true;
    });
  });
});
