module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src:[
            'js/app.js',
            'js/service.js',
            'js/controller.js',
            'js/directives.js'
        ],
        dest: 'js/concat.js',
      },
      css: {
        src:[
          'css/vertical-timeline.css',
          'css/style.css',
          'css/media.css'
        ],
        dest: 'css/concat.css'
      }
    },

    uglify: {
      build: {
          src: 'js/concat.js',
          dest: 'js/production.min.js'
      }
    },

    cssmin: {
      css: {
        src: 'css/concat.css',
        dest: 'css/production.min.css'
      }
    }
 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
//  grunt.loadNpmTasks('grunt-usemin');

  // Default task(s).
  grunt.registerTask('default', [
    //'copy:html',
    //'useminPrepare',
    'concat',
    'uglify',
    'cssmin'
    //'usemin'
  ]);


};