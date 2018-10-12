var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect-php'),
  browserSync = require('browser-sync');

var output = './assets/css';
var autoprefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('default', function() {
  console.log("STARTING");
});


gulp.task('connect-sync', function () {
  connect.server({}, function () {
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });
});

gulp.task('watch', function () {
  gulp.watch(['js/**/*.js', '*.html', '**/*.php']).on('change', browserSync.reload);
});

gulp.task('default', ['connect-sync'], function () {
  gulp.start('watch');
});