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
                    'base/normalize.less': 'normalize-css/normalize.css',
                },
            },
        },

        less: {
            production: {
                options: {
                    paths: ['css'],
                    sourceMap: true,
                    sourceMapFilename: 'css/satus.css.map',
                    sourceMapURL: 'satus.css.map',
                    sourceMapRootpath: '../',
                },
                files: {
                    'css/satus.css': [ 'less/satus.less' ]
                },
            },
        },

        csscomb: {
            css: {
                options: {
                    config: '.csscomb.json'
                },
                files: {
                    'css/satus.css': ['css/satus.css'],
                },
            },
        },

        autoprefixer: {
            options: {
                browsers: ['last 5 versions']
            },
            satus: {
                files:  { 'css/satus.css' : 'css/satus.css' }
            },
        },

        cssmin: {
            target: {
                files: {
                    'css/satus.min.css' : ['css/satus.css']
                },
            },
        },

        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less'],
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
        },

    });

    // Load our tasks
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', 'watch');

}
