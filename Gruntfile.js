module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //서버
    serve: {
        options: {
            port: 9000
        }
    },
    //레스
    //와치
  });

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
