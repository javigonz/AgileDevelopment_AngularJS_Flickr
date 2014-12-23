// File: Gulpfile.js
'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    jshint    = require('gulp-jshint'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    useref    = require('gulp-useref'),
    gulpif    = require('gulp-if'),
    uncss     = require('gulp-uncss'),
    karma     = require('karma').server,
    historyApiFallback = require('connect-history-api-fallback');


///////////////////////////////////////////////////////////////////////////////// DEVELOP

// Developer server config
gulp.task('server', function() {
  connect.server({
    root: './',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});


// Reload automatic the browser html
gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});


// Search warnings and errors in js scripts and then show by console
gulp.task('jshint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint('.jshintrc'))  
    .pipe(jshint.reporter('jshint-stylish'))
    //.pipe(jshint.reporter('fail'));
});

// The Watchmen
gulp.task('watch', function() {
  gulp.watch(['./**/*.html'], ['html']);
  gulp.watch(['./bower.json'], ['wiredep']);
});


///////////////////////////////////////////////////////////////////////////////// PRODUCTION

// // Production server config
gulp.task('server-dist', function() {
  connect.server({
    root: './dist',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

// Compress and minimizate CSS y JS files
gulp.task('compress', function() {
  gulp.src('./app/**/*')
    .pipe(gulpif('*.js', uglify({mangle: false })))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist/app')); 
});

// Copy static files and index.html inside /dist without comments
gulp.task('copy', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist')); 
});

// Delete css non used
gulp.task('uncss', function() {
  gulp.src('./dist/app/content/css/flickrStyle.css')
    .pipe(uncss({
      html: ['./index.html', '.app/partials/photos.html']
    }))
    .pipe(gulp.dest('./dist/app/content'));
});

//////////////////////////////////////////////////////////////////////////////// UNIT TEST

//Unit Test with Karma
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

//////////////////////////////////////////////////////////////////////////////// TASK

gulp.task('default', ['server','watch', 'jshint']);
gulp.task('production', [ 'server-dist', 'compress', 'copy', 'uncss']);
gulp.task('unitTest', ['test']);


