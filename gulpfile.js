var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');


gulp.task('default',['task1'],function(){
	console.log('hello default task');
	});

gulp.task('task1',['task2'],function(){
	console.log('hello task 1');
	});

gulp.task('task2',function(cb){
	console.log('hello task 2');

	});

gulp.task('output1',function(){
	gulp
		.src('assets/bw_compns/bootstrap/**/*.js')
		.pipe(gulp.dest('output1'));
	});

gulp.task('output2',function(){
	gulp 
		.src('assets/bw_compns/bootstrap/**/*.js',
			{ 
				base: 'assets/bw_compns/'
			})
		.pipe(gulp.dest('output2'));
	});

gulp.task('output3',['clean'],function(){
	gulp 
		.src(['assets/bw_compns/**/*.js','assets/bw_compns/**/*.css'],
			{ base: 'assets/bw_compns/'})
		.pipe(gulp.dest('output3'));
	});

gulp.task('clean',function(){
	 
		del(['output3/**','!output3']).then(function (paths) {
    		console.log('Deleted files/folders:\n', paths.join('\n'));
    	});
	});

gulp.task('output-app',function(){
	gulp 
		.src(['app/**/*.js','app/**/*.css'],
			{ base: 'app/'})
		.pipe(gulp.dest('output-app'));
	});

gulp.task('clean-app',function(){
	del(['output-app/**','!output-app']).then(function (paths) {
    		console.log('Deleted files/folders:\n', paths.join('\n'));
    	});
	});
gulp.task('watch',function(){
	gulp
		.watch('app/**/*.js',['app']);
	});

gulp.task('app',function(){
	gulp
		.src(['app/**/*.module.js','app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'));
	});












