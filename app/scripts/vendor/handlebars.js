define([
  'handlebars.runtime',
  'replace!data/nls/i18n.js'
],

function (Handlebars, i18n) {
  'use strict';

  // Here you gonna register your Handlebars helpers like this:
  // ```
  //  Handlebars.default.registerHelper('foo', function () {
  //    return 'bar';
  //  });
  // ```

  Handlebars.default.registerHelper('t', function (key) {
    return i18n[key] || key;
  });

  return Handlebars;
});
