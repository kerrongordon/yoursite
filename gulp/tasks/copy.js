'use strict';

var gulp = require('gulp');

gulp.task('copy', function() {
    return gulp.src('app/icons/**/*.*')
    .pipe(gulp.dest('dist/icons'));
});

gulp.task('copyHTML', function() {
    return gulp.src('.tmp/projects/**/*.*')
    .pipe(gulp.dest('dist/projects'));
});
