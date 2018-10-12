var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect-php'),
  sass = require('gulp-ruby-sass'),
  browserSync = require('browser-sync');

var output = './assets/css';
var autoprefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('default', function() {
  console.log("STARTING");
});


gulp.task('styles', function () {
  return sass('assets/sass/style.scss', { style: 'compressed', sourcemap:true })
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('connect-sync', function () {
  connect.server({}, function () {
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });
});

gulp.task('watch', function () {
  gulp.watch("sass/**", ['styles']);
  gulp.watch(['js/**/*.js', '*.html', '**/*.php']).on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'connect-sync'], function () {
  gulp.start('watch');
});