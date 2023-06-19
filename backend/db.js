const mongoose = require('mongoose');
const mongoURI='mongodb+srv://jaydeepsingh:jay1234@cluster0.1d3of9a.mongodb.net/?retryWrites=true&w=majority'
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,()=>{
        console.log("connected")
    });
}
module.exports=mongoDB;