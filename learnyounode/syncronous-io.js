// try using some ES6

var fs = require('fs')

var path = process.argv[2]

var file = fs.readFileSync(path)

var answer = file.toString().split('\n').length - 1

console.log(answer);