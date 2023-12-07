const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-Found')
const { AsyncLocalStorage } = require('async_hooks')


// middleware
//app.use(express.static('./'))
app.use(express.json())
app.use(notFound)

// routes
app.use('/api/v1/tasks',tasks)

const port = 8000

const start = async () => {
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening @ port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
