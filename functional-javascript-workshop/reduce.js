function countWords(inputWords) {
    return inputWords.reduce((previous, current, index, arr) => {
        if (current in previous) {
            ++previous[current]
        } else {
            previous[current] = 1
        }
        return previous
    }, {})
}

module.exports = countWords