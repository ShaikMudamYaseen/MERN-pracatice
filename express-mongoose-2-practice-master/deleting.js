const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Book=require("./book_model")
//establishing connection
const dbConnect=mongoose.connect("mongodb://localhost:27017/library");
Book.findOneAndRemove({title:'lmn'},(error,deletedRecord)=>{
    if(!error){
        console.log(deletedRecord)
    }
});
app.listen(1234,()=>{
    console.log("Up and running");
})