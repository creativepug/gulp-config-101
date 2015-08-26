var gulp = require('gulp');

// css related plugins
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

// javascript related plugins
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');

var paths = {
	css: {
		src: ['./sass/**/*.scss'],
		dest: './dist/css'
	},
	js: {
		src: [
			'./js/main.js'
		],
		dest: './dist/js'
	}
};

gulp.task('sass', function() {
	return gulp.src(paths.css.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest(paths.css.dest));
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
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.js.dest));
});
