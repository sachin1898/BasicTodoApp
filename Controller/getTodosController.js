const {todo}=require('../Modal/Todo')

exports.getTodos=async (req,res)=>{
    const todoList=await todo.find();
    res.json(todoList)
}