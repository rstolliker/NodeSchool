var net = require("net")

function socketLogic(socket) {
    date = new Date()
    // YYYY-MM-DD hh:mm
    socket.end(`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`)
    //socket.end()
}

var server = net.createServer(socketLogic)

server.listen(process.argv[2])
