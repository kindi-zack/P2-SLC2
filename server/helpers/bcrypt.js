const bcrypt = require('bcryptjs')

const hashPswd = function (pswd) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pswd, salt)
}

const comparePswd = function (pswd, hashP){
    return bcrypt.compareSync(pswd, hashP)
}

module.exports = {
    hashPswd,
    comparePswd
}