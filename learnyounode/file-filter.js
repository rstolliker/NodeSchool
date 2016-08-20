var fs = require('fs')

fs.readdir(process.argv[2], (err, list) => {
    if (!err) {
        list.map((item) => {
            if (item.endsWith('.' + process.argv[3])) {
                console.log(item)
            }
        })
    }
})