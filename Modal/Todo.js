const mongoose = require('mongoose')

const TodoSchema= new mongoose.Schema({
    title: String,
    tasks: [String]
},
{
    timestamps:true
})

exports.todo= mongoose.model("todo",TodoSchema)
