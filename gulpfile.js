const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('watch', function () {
    gulp.watch(['src/**/*.**'], ['es5']);
});

gulp.task('es5', function () {
    gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('dist'));
});

gulp.task('default', ['es5', 'watch']);
