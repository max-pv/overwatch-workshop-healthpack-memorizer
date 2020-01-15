const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

const compile = () => {
  return gulp.src('src/healthpack-memorizer.ow')
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist'));
}

const watch = () => gulp.watch('src/**/*', compile)

exports.default = gulp.series(compile, watch);
