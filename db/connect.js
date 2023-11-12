const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url)
}

process.noDeprecation = true

module.exports = connectDB