function checkUsersValid(goodUsers) {
    return function allUsersValid(sumbittedUsers) {
        return sumbittedUsers.every(function (subUser) {
            return goodUsers.some((goodU) => goodU.id === subUser.id)
        })
    }
}

module.exports = checkUsersValid