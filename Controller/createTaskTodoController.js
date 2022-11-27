const {todo}=require('../Modal/Todo')

exports.createTaskTodo=async (req,res)=>{
    const todoId=req.params.todoId;
    const todoItem= await todo.findById(todoId);
    todoItem.tasks.push(req.body.task)
    await todoItem.save();
    console.log(todoItem);
    res.json(todoItem);
}