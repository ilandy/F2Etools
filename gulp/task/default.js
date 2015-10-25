var gulp = require('gulp');
var del = require('del');
var conf = require('../config');

gulp.task('clean-app',function(){
	del(['output-app/**','!output-app']).then(function (paths) {
    		console.log('Deleted files/folders:\n', paths.join('\n'));
    	});
	});