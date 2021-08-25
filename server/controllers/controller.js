const { User, Inventory } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePswd } = require('../helpers/bcrypt')

class Controller{
    static register(req, res) {
        const { email, password } = req.body

        User.create({
            email,
            password
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static login(req, res) {
        const { email, password } = req.body

        User.findOne({
            where: {
                email
            }
        })
        .then(data => {
            if(!data) throw { msg: 'INVALID PASSWORD / EMAIL'}

            const checkPswd = comparePswd(password, data.password)
            if(!checkPswd) throw { msg: 'INVALID PASSWORD / EMAIL'}
            const access_token = generateToken({
                id: data.id,
                email: data.email
            }) 
            res.status(200).json({
                access_token,
                email: data.email
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static inventories(req, res) {
        Inventory.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = Controller