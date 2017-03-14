'use strict';

var gulp = require('gulp'),
    Config = require('./gulpfile.config'),
    del = require('del'),
    ngc = require('gulp-ngc'),
    runSequence = require('run-sequence').use(gulp),
    tslint = require("gulp-tslint");


var config = new Config();


gulp.task('clean', function () {
    return del(config.release);
});


gulp.task('ngc', function () {
    return ngc('tsconfig.json');
});


gulp.task("tslint", function () {

    var sourceTsFiles = config.appTypeScript;

    gulp.src(sourceTsFiles)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('build', function (callback) {
    runSequence('clean', "tslint", 'ngc', callback);
});
