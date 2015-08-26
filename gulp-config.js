module.exports = {
	css: {
		src: ['./sass/**/*.scss'],
		dest: './dist/css'
	},
	js: {
		src: [
			'./js/main.js',
			'./js/hello.js'
		],
		dest: './dist/js/',
		fileName: 'main.js'
	},
	lib: {
		src: [
			'./lib/angular/angular.js',
			'./lib/angular-ui-router/release/angular-ui-router.js'
		],
		dest: './dist/js/',
		fileName: 'lib.js'
	}
};
