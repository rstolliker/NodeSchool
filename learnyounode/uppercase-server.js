var http = require('http')
var map = require('through2-map')

function serverLogic (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
}

var server = http.createServer(serverLogic)
server.listen(process.argv[2])