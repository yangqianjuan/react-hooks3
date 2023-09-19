const commonGulp = require('../../gulpfile.js');
const gulp = require('gulp');

exports.default = gulp.series(commonGulp.default);
