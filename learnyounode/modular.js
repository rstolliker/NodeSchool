var fs = require("fs")

// perfoms callback on any files which have the extension
function exported (dirname, extension, callback) {
    fs.readdir(dirname, (err, list) => {
        if (err)
            return callback(err)
        
        callback(null, list.filter((file) => file.endsWith('.' + extension)))
    })
}

module.exports = exported