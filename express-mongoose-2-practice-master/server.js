const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Book=require("./book_model")

const dbConnect=mongoose.connect("mongodb://localhost:27017/library");

app.get("/",(req,res)=>{
    Book.find({}).exec((err,books)=>{
        if(err){
            res.send("something is wrong");
        }
        else{
            res.json(books);
        }
    })
})

app.get("/books/:id",(req,res)=>{
    Book.findOne({
        _id:req.params.id
    }).exec((err,book)=>{
        if(err){
            res.send("something is wrong");
        }
        else{
            res.json(books);
        }
    })
})

app.listen(1234,()=>{
    console.log("Up and Running");
})