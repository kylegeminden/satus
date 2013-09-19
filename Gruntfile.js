module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'css/<%= pkg.name %>.css': [ 'less/satus.less' ]
        }
      },
      production: {
        options: {
          paths: ['css'],
          yuicompress: true,
          // report: 'gzip'
        },
        files: {
          'css/<%= pkg.name %>.min.css': [ 'less/satus.less' ]
        }
      }
    },

    concat: {
      plugins: {
        src: [
          'js/plugins/transition.js',
          'js/plugins/alert.js',
          'js/plugins/button.js',
          'js/plugins/carousel.js',
          'js/plugins/collapse.js',
          // 'js/plugins/dropdown.js',
          'js/plugins/modal.js',
          'js/plugins/tooltip.js',
          'js/plugins/popover.js',
          'js/plugins/scrollspy.js',
          'js/plugins/tab.js',
          'js/plugins/affix.js'
        ],
        dest: 'js/plugins/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        // report: 'gzip';
      },
      plugins: {
        files: {
          'js/plugins/<%= pkg.name %>.min.js': [ 'js/plugins/<%= pkg.name %>.js' ]
        }
      }
    },

    watch: {
      less: {
        files: ['less/**/*.less'],
        tasks: 'less',
      },
      css: {
        files: ['css/**/*.css'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true,
        },
      }
    }

  });

  //load our tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //default tasks to run
  grunt.registerTask('default', 'watch');

}