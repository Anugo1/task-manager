const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
  name:{
  type: String,
  required:[true, 'must provide name'],
  trim: true,
  min:[5, 'too few characters'],
  max:[20, 'can not be more that 20 characters'],   
},
completed: {
  type: Boolean,
  default: false,
},
})

module.exports = mongoose.model('Task',TaskSchema)