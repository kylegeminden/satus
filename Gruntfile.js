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
                    'css/<%= pkg.name %>.css': [ 'less/main.less' ]
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
                    'img/ico/apple-touch-icon-precomposed.png': 'img/ico/apple-touch-icon-precomposed.png'
                },
            },
        },

        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: 'less',
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
