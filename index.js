const express =require('express');
const { createTaskTodo } = require('./Controller/createTaskTodoController');
require('./database').connect()
const {createTodo} = require('./Controller/createTodoController');
const {deleteTodo}=require('./Controller/deleteTodoController');
const { getTasksTodo } = require('./Controller/getTasksTodoController');
const { getTodos } = require('./Controller/getTodosController');
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen('4000',()=>{
    console.log("server is runnig at port 4000");
})

app.get('/',(req,res)=>{
    res.send("Hello in my todoapp")
})

app.post('/createTodo',(req,res)=>createTodo(req,res))
app.delete('/deleteTodo/:id?',(req,res)=>deleteTodo(req,res))
app.get('/getTodos',(req,res)=>getTodos(req,res))

app.post('/createTaskTodo/:todoId?',(req,res)=>{createTaskTodo(req,res)})
app.get('/getTasksTodo/:todoId?',(req,res)=>{getTasksTodo(req,res)})





