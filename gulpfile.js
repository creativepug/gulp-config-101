var gulp = require('gulp');

// css related plugins
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

// javascript related plugins
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');

// project-specific config for gulp
var paths = require('./gulp-config');

gulp.task('sass', function() {
	return gulp.src(paths.css.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest(paths.css.dest));
});

gulp.task('lib', function() {
	return gulp.src(paths.lib.src)
		.pipe(concat(paths.lib.fileName))
		.pipe(gulp.dest(paths.lib.dest));
});

gulp.task('js', function() {
	return gulp.src(paths.js.src)
		.pipe(jscs())
			.on('error', function(err) {
				console.log(err.toString());
				this.emit('end');
			})
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat(paths.js.fileName))
		.pipe(gulp.dest(paths.js.dest));
});

gulp.task('default', ['lib', 'js', 'sass'], function() {
	gulp.watch(paths.css.src, ['sass']);
	gulp.watch(paths.js.src, ['js']);
});
