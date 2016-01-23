var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


gulp.task('less', function () {
  return gulp.src('./src/less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('watch', function() {
  gulp.watch("./src/less/*.less", ['less-watch']);
  gulp.watch("./*.html", ['html-watch']);
});

gulp.task('less-watch', ['less'], browserSync.reload);
gulp.task('html-watch', browserSync.reload);



gulp.task('default', ['browser-sync', 'less', 'watch']);
