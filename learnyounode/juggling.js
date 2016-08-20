var http = require("http")

var queue = ["", "", ""] // to store results
var finished = 0 // number of finished gets

function queueManage(place, collect) {
    queue[place - 2] = collect
    finished++

    if (finished >= 3) {
        queue.forEach((str) => console.log(str))
    }
}

// makes a request to the specified url and adds to queue
function performGet(place, url) {
    http.get(url, (response) => {
        response.setEncoding("utf8")

        var collect = "" // result after end

        response.on("data", (data) => {
            collect += data
        })

        response.on("end", () => {
            queueManage(place, collect)
        })
    })
}

for (var i = 2; i < 5; ++i) {
    performGet(i, process.argv[i]);
}