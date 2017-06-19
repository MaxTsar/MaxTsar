let gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    less = require('gulp-less'),
    path = require('path'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concatCSS = require('gulp-concat-css'),
    livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
    gulp.src('*.html')
    .pipe(connect.reload());
});
 

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concatCSS("style.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('./*.html', ['html']);
});
