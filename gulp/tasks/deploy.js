'use strict';

var gulp = require('gulp');

var rsync = require('gulp-rsync');
//var plumber = require('gulp-plumber');
var ghPages = require('gulp-gh-pages');

var handleError = require('./../utils/handleError.js');

// Deploying via rsync/sftp 
// Credentials are stored in .env file

// TODO plumber not working with this

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
