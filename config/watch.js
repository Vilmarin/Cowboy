const gulp = require('gulp');
const pugTask = require('./pug');
const sassTask = require('./sass');
const {PUG_WATCH, SASS_WATCH} = require('./constants');

module.exports = function() {
    gulp.watch(PUG_WATCH, gulp.series(pugTask))
    gulp.watch(SASS_WATCH, gulp.series(sassTask))
  }
