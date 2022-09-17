const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Book=require("./book_model");
const res = require('express/lib/response');
//establishing connection
const dbConnect=mongoose.connect("mongodb://localhost:27017/library");
Book.findOneAndUpdate({title:'JS'},{title:'lmn'},((err,book)=>{
    if(err)
        console.log("Error can't update")
    else
            console.log(book)
})
)
app.listen(1234,()=>{
    console.log("Up and running");
})