const gulp = require('gulp');
const pug = require('gulp-pug');
const {PUG_SOURCE} = require('./constants');

module.exports = function () {
    return gulp.src(PUG_SOURCE)
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
}