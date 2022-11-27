const mongoose =require('mongoose')
const Mongo_URL='mongodb+srv://sachin1898:sachin1898@firstclus.colcc.mongodb.net/?retryWrites=true&w=majority'

exports.connect=async ()=>{
    await mongoose.connect(Mongo_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(console.log("DB connected with success"))
    .catch((err)=>{
        console.log("DB connection failed "+err);
    })
}