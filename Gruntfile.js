module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        bowercopy: {
            less: {
                options: {
                    destPrefix: 'less/',
                },
                // dest : src
                files: {
                    'lesshat.less': 'lesshat/build/lesshat.less',
                    'base/normalize.less': 'normalize-css/normalize.css',
                }
            },
            jsVendor: {
                options: {
                    destPrefix: 'js/vendor',
                },
                // dest : src
                files: {
                    'modernizr.js': 'modernizr/modernizr.js',
                    'jquery.min.js': 'jquery/dist/jquery.min.js',
                    'angular.min.js': 'angular/angular.min.js',
                },
            },
        },

        less: {
            production: {
                options: {
                    paths: ['css'],
                    // compress: true,
                    // report: 'gzip',
                    sourceMap: true,
                    sourceMapFilename: 'css/main.css.map',
                    sourceMapRootpath: '../',
                },
                files: {
                    'css/main.css': [ 'less/satus.less' ],
                    'css/ie-grid.css': [ 'less/ie-grid.less' ]
                },
            },
        },

        uglify: {
            options: {
                // report: 'gzip';
            },
            plugins: {
                files: {
                    'js/plugins/<%= pkg.name %>.js': [
                        'js/plugins/yourplugin.js'
                    ]
                },
            },
        },

        imagemin: {
            touchicons: {
                options: {
                    optimizationLevel: 7,
                },
                files: {
                    'apple-touch-icon-precomposed.png': 'apple-touch-icon-precomposed.png'
                },
            },
        },

        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: 'less:production',
            },
            uglify: {
                files: ['js/plugins/**/*.js'],
                tasks: 'uglify',
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
            },
            js: {
                files: ['js/**/*.js'],
                options: {
                    livereload: true,
                },
            },
        },

    });

    //load our tasks
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //default tasks to run
    grunt.registerTask('default', 'watch');

}
