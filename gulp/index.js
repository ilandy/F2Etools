var fs = require('fs');
var tasks = fs.readdirSync('./gulp/task/');

tasks.forEach(function(task) {
	require('./task/' + task);
}); 
