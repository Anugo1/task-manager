const { error } = require('console')
const { url } = require('inspector')
const mongoose = require('mongoose')


const connectdb = (url) =>{
return mongoose.connect(url)
}

module.exports = connectdb