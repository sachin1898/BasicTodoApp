const {todo} = require('../Modal/Todo.js')

exports.createTodo =async (req,res)=>{
    //const todos= new todo({re.body.title}) //ERROR:::todo is not a constructor
    const todos= new todo({
        title:req.body.title
    })
    try {
        await todos.save();
        res.send(`Todo created successfully with id : ${todos._id}`);
    } catch (err) {
        console.log(err);
        res.send("Error occured"+err)
    }
}

