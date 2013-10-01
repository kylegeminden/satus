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
                    'js/plugins/your-plugin.js',
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

        imagemin: {
            touchicons: {
                options: {
                    optimizationLevel: 7
                },
                files: {
                    'img/ico/apple-touch-icon-precomposed.png': 'img/ico/apple-touch-icon-precomposed.png'
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //default tasks to run
    grunt.registerTask('default', 'watch');

}