var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var paths = {
	css: {
		src: ['./sass/**/*.scss'],
		dest: './dist/css'
	}
};

gulp.task('sass', function() {
	return gulp.src(paths.css.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest(paths.css.dest));
});
