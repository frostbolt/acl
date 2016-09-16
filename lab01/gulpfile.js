var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	imagemin =require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer');

var outputDir = 'build';

gulp.task('pug',function(){
	return gulp.src('src/templates/**/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(outputDir))
		.pipe(connect.reload());
});

gulp.task('js',	function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest(outputDir+'/js'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	return gulp.src('src/sass/style.scss')
		.pipe(sass({outputStyle: 'nested', lineComments: false}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(outputDir+'/css'))
		.pipe(connect.reload());
});

gulp.task('imgcompress', function() {
	return gulp.src('src/img/*')
		// .pipe(imagemin())
		.pipe(gulp.dest(outputDir+'/img'));
})

gulp.task('watch', function(){
	gulp.watch('src/templates/**/*.pug', ['pug']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/img/*', ['imgcompress']);
});

gulp.task('connect', function(){
	connect.server({
		root: [outputDir],
		livereload: true
	});
});

gulp.task('default', ['connect', 'js', 'pug', 'sass', 'imgcompress', 'watch']);