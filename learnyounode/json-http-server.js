var http = require("http")
var url = require("url")

function serverLogic(req, res) {
    res.writeHead(200, {'Content-Type' : 'application/json'})
    var path = url.parse(req.url, true)
    var d = new Date(path.query.iso)

    switch(path.pathname) {
        case "/api/parsetime":
            res.write(JSON.stringify({
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            }))
            break
        case "/api/unixtime":
            res.write(JSON.stringify({
                unixtime: d.getTime()
            }))
        default:
            break
    }

    res.end('\n')
}

var server = http.createServer(serverLogic)
server.listen(process.argv[2])