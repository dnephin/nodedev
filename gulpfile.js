
var flowRemoveTypes = require('flow-remove-types')
var gulp = require('gulp');
var flow = require('gulp-flowtype');
var mocha = require('gulp-mocha')
var gutil = require('gulp-util')
var through = require('through2')

var data = {
    'source': ['src/*.js'],
    'buildDir': './build',
    'tests': ['test/test-*.js'],
};

gulp.task('build', () => {
    return gulp.src(data.source)
        .pipe(flowStrip())
        .pipe(gulp.dest(data.buildDir))
});

gulp.task('test', () => {
    return gulp.src(data.tests, { read: false })
        .pipe(mocha({ reporter: 'list' }));
});

gulp.task('watch', () => {
    return gulp.watch(data.source.concat(data.tests), [
        'typecheck',
        'build',
        'test',
    ]);
});

gulp.task('typecheck', () => {
    return gulp.src(data.source)
        .pipe(flow({ beep: false }));
});

function flowStrip() {
    return through.obj((file, enc, cb) => {
        file.contents = new Buffer(flowRemoveTypes(file.contents.toString('utf8')).toString())
        cb(null, file);
    })
}


