var fs = require('fs');
var file = process.argv[2];

var fileString = fs.readFile(file, 'utf8', function(err, data) {
	if (data) {
		console.log(data.split('\n').length - 1); 
	} else {
		console.error(err.message);
	}
});

