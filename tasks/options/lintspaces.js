module.exports = {
  options: {
    editorconfig: '.editorconfig'
  },
  grunt: {
    src: ['Gruntfile.js', 'tasks/**/*.js']
  },
  code: {
    src: ['<%= yeoman.app %>/scripts/**/*.js']
  },
  test: {
    src: ['test/spec/**/*.js']
  }
};
