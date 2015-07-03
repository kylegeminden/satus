var gulp         = require('gulp'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload   = require('gulp-livereload'  )

gulp.task('bowercopy', function() {
    gulp.src('bower_components/normalize-css/normalize.css')
        .pipe(rename('_normalize.scss'))
        .pipe(gulp.dest('scss/base/'));
});

gulp.task('buildcss', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(rename('satus.css'))
        .pipe(sourcemaps.write('../css', {
            includeContent: false,
            sourceRoot: '/scss'
        }))
        .pipe(gulp.dest('css/'))
});

gulp.task('html', function() {
    gulp.src('index.html')
        .pipe(livereload());
});

gulp.task('css', function() {
    gulp.src('css/*.css')
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('scss/**/*.scss', ['buildcss']);
    gulp.watch('index.html', ['html']);
    gulp.watch('css/*.css', ['css']);
});
