require([
  'config'
], function () {
  'use strict';

  require(['index'], function (Module) {
    var app = new Module({el: '.hero-unit'});
    app.start();
  });
});
