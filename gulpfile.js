var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');


gulp.task('test', function () {
    console.log('running test');
    return gulp.src(['*spec.js'], {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('testm', function() {
    return gulp.src(['*spec.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('it', function () {
    console.log('running it');
});

gulp.task('test-watch', function(){
  gulp.watch(['*.js', 'test/**'], ['test']);
});