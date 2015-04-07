'use strict';

var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var reload = require('./browserSync.js').reload;
var handleError = require('./../utils/handleError.js');


// Compile scss using ruby sass

gulp.task('styles', function () {
  return rubySass('app/styles/main.scss', {
      sourcemap: false,
      style: 'expanded',
      lineNumbers: true
    })
    // Error emiting from sass not working right now
    // with plumber or without
    .pipe(plumber(handleError))
    //.on('error', handleError)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream:true}));
});
