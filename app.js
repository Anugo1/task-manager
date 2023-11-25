
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
const { AsyncLocalStorage } = require('async_hooks')

//middleware

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('Task manager')
})

app.use('/api/v1/tasks',tasks)

const port = 8000

const start = async () => {
    try {
        await connectdb()
        app.listen(port, console.log(`server is listening @ port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
