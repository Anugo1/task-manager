const express = require('express')
const app = express()
const tasks = require('./routes/tasks')


//middleware

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('Task manager')
})

app.use('/api/v1/tasks',tasks)

const port = 8000

app.listen(port, console.log(`server is listening @ port ${port}...`))