var gulp = require('gulp');
var loc = require('./location.js');

gulp.task('default', ['generate:express-min']);

gulp.task('generate:express-min', function() {
  gulp.src('./dist/express-min/**/*.*')
    .pipe(gulp.dest('./../express-min'));
  gulp.src('./dist/express-min/.*')
    .pipe(gulp.dest('./' + loc['express-min']));
});
