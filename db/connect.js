const { error } = require('console')
const { url } = require('inspector')
const mongoose = require('mongoose')

const connection_string =
'mongodb+srv://ekehumphery:anugo1@cluster0.7forwyr.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectdb = (url) =>{
return mongoose.connect(connection_string)
}

module.exports = connectdb