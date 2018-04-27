var gulp = require('gulp');
var less = require('gulp-less');
var server = require('gulp-webserver');

gulp.task('less', function() {
    gulp.src('./src/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css/'))
})

gulp.task('server', function() {
    gulp.src('./src')
        .pipe(server({
            port: 9184,
            open: true,
            livereload: true
        }))
})

gulp.task('wacth', function() {
    gulp.watch('./src/static/less/*.less', ['less'])
})

gulp.task('default', ['less', 'server'], function() {})