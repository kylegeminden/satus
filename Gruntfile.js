module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    paths: ['css'],
                    // compress: true,
                    // report: 'gzip',
                    sourceMap: true,
                    sourceMapFilename: 'css/<%= pkg.name %>.css.map',
                    sourceMapRootpath: '../',
                },
                files: {
                    'css/<%= pkg.name %>.css': [ 'less/satus.less' ]
                },
            },
            style_guide: {
                options: {
                    paths: ['style_guide/css'],
                    // compress: true,
                    // report: 'gzip',
                    sourceMap: true,
                    sourceMapFilename: 'style_guide/css/style-guide.css.map',
                    sourceMapRootpath: '../',
                },
                files: {
                    'style_guide/css/style-guide.css': [ 'style_guide/less/style-guide.less' ]
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
            less_style_guide: {
                files: ['style_guide/less/**/*.less'],
                tasks: 'less:style_guide',
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //default tasks to run
    grunt.registerTask('default', 'watch');

}
