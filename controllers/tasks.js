const Task = require('../models/Task')
 const getAllTasks = (req, res) => {
    res.send('all items from the file')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
    console.log({task})
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update a task')
}
const deleteTask = (req, res) => {
    res.send('delete the task')
}



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}