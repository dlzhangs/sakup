var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task('connect', function(done) {
    console.log('Server Start!');
    connect.server({
        root: '.',
        port: 8080,
        livereload: true
    });
});
