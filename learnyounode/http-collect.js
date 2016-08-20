var http = require("http")
// I don't want to use any third party modules

http.get(process.argv[2], (response) => {
    response.setEncoding("utf8")

    var collect = "" // result after end

    response.on("data", (data) => {
        collect += data
    })

    response.on("end", () => {
        console.log(collect.length) // number of characters
        console.log(collect) // data itself
    })
})