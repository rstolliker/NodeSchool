var http = require('http')
var fs = require('fs')

var serverPort = process.argv[2]
var serverFile = process.argv[3]

function serverLogic(req, res) {
    var fileStream = fs.createReadStream(serverFile)
    fileStream.pipe(res)
}

var server = http.createServer(serverLogic)
server.listen(serverPort)