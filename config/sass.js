const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const {SASS_SOURCE} = require('./constants');

module.exports = function () {
    return gulp.src(SASS_SOURCE)
    .pipe(sass({file: null}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
}
