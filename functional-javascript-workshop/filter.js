function getShortMessages(messages) {
    return messages.map((messObj) => messObj.message)
        .filter((mess) => mess.length < 50)
}

module.exports = getShortMessages