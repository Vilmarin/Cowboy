const gulp = require('gulp');
const pugTask = require('./pug');
const sassTask = require('./sass');

module.exports = gulp.series(
  pugTask,sassTask
);