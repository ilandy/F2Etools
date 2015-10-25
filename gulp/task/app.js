var gulp = require('gulp');
var del = require('del');
var conf = require('../config');
var $ = require('gulp-load-plugins')();

// var concat = require('gulp-concat');
// var minify = require('gulp-minify');
// var minifyHTML = require('gulp-minify-html');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var sourcemaps = require('gulp-sourcemaps');

gulp.task('app',function(){
	gulp.src([
 			'app/**/*.module.js',
 			'app/**/*.js'
 		])
		.pipe(gulp.dest(conf.assetDir + '/src'))
		.pipe($.sourcemaps.init())
		.pipe($.concat('app.js'))
		.pipe(gulp.dest(conf.assetDir + ''))
		.pipe($.uglify({
			mangle: false
		}))
		.pipe($.rename({
			extname: '.min.js'
		}))
		.pipe($.sourcemaps.write('./'))
 		.pipe(gulp.dest(conf.assetDir + ''));

 	gulp.src(['index.html'])
		.pipe($.minifyHtml
			({
				empty: true
			}))
		.pipe(gulp.dest('dist'));

});	

gulp.task('watch',function(){
	gulp
		.watch('app/**/*.js',['app']);
	});