const { query } = require('express')
const {todo} =require('../Modal/Todo')

exports.deleteTaskTodo=async (req,res)=>{
    const todoItem= await todo.findById(req.query.todoId);
    todoItem.tasks;
}