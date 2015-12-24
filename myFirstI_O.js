var fs = require('fs');
var file = process.argv[2];

var fileString = fs.readFileSync(file).toString();

console.log(fileString.split('\n').length - 1);