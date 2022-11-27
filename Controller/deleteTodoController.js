const {todo}=require('../Modal/Todo')

exports.deleteTodo=async (req,res)=>{
    console.log(req.params.id);
    const findTodo=await todo.findByIdAndDelete(req.params.id);
    console.log(findTodo);
    res.send("deleted successfully with title"+ findTodo.title)
}

