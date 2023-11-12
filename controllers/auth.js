const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    // hashing password (first way)
    // const { name, email, password} = req.body
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)
    // const tempUser = { name, email, password: hashedPassword }

    // clean ERROR RESPONSE (optional)
    // const { name, email, password } = req.body
    // if (!name || !email || !password ) {
    //     throw new BadRequestError('Please privide name, email and password')
    // }
    // default ERROR RESPONSE
    const user = await User.create({ ...req.body }) // hashing first way ...tempUser
    const token = jwt.sign({ userId: user._id, name: user.name}, 'jwtSecret', { expiresIn: '30d',})
    res.status(StatusCodes.CREATED).json({ user: {name: user.getName() }, token })
}

const login = async (req, res) => {
    res.send('login user')
}





module.exports = {
    register, 
    login
}