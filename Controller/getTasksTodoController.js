const {todo}=require('../Modal/Todo')

exports.getTasksTodo=async (req,res)=>{
    const todoList=await todo.findById(req.params.todoId);
    res.json(todoList.tasks)
}