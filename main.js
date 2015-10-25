var $ =require('jquery');
var conf = require('./gulp/config.js'); 
console.log('Hello world ! Assets is ' + conf.assetDir);

$(function(){
	$('body').on('click',function(){
		var myPic = require('./15614.jpg');
		require('./assets/styles.css');


		$('#pic').append('<img src="'+ myPic +'" width="20%">');
	});
});