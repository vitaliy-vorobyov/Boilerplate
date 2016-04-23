var gulp = require('gulp');
var concat = require('gulp-concat');
var bower = require('gulp-bower');

gulp.task('default', ['bower', 'watch']);

gulp.task('watch', ['bower'], function() {
  	gulp.start('styles');
  	gulp.watch('assets/css/**/*.css', function(){
  		gulp.start('styles');
  	});
    gulp.start('javascript');
    gulp.watch('assets/js/**/*.js', function(){
      gulp.start('javascript');
    });
});

gulp.task('styles', function() {
	var paths = [
		'assets/vendor/bootstrap/dist/css/bootstrap.min.css',
		'assets/css/**/*.css'
	];
  gulp.src(paths)
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('assets/public'));
});

gulp.task('javascript', function() {
  var paths = [
    'assets/vendor/jquery/dist/jquery.min.js',
    'assets/vendor/bootstrap/dist/js/bootstrap.min.js',
    'assets/js/**/*.js'
  ];
  gulp.src(paths)
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets/public'));
});

gulp.task('bower', function(cb) {
  return bower('./assets/vendor');
  cb(err);
});