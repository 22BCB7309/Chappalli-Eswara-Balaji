const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed : {type : Boolean , required:true} ,
  urgency : {type : String , required : true} ,
  description: String
});
module.exports = mongoose.model('Task', TaskSchema);