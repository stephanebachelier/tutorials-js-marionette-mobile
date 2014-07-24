module.exports = {
  build: [
    'clean:dist',
    'concurrent:build'
  ],
  buildlib: [
    'clean:lib',
    'concurrent:lib',
    'copy:lib',
    'uglify:lib',
    'cssmin:lib'
  ],
  default: [
    'lint-code',
    'lint-test',
    'build'
  ],
  dev: [
    'karma:unit:start',
    'watch'
  ],
  'lint-code': [
    'jshint:code',
    'jscs:code',
    'lintspaces:code'
  ],
  'lint-test': [
    'jshint:test',
    'jscs:test',
    'lintspaces:test'
  ],
  doc: [
    'groc',
    'open:doc',
    'connect:doc:keepalive'
  ],
  data: [
    'clean:data',
    'shell:data',
    'wrap:data'
  ],
  fixtures: [
    'clean:fixtures',
    'shell:fixtures',
    'wrap:fixtures'
  ]
};
