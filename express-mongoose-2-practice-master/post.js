const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Book=require("./book_model")

const dbConnect=mongoose.connect("mongodb://localhost:27017/library");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende:true}));

app.post("/book",(req,res)=>{
    let newBook=new Book();
    newBook.title=req.body.title;
    newBook.author=req.body.author;
    newBook.category=req.body.category;
    newBook.save((err,book)=>{
        if(err){
            res.send("Sorry,couldn't save the file");
        }
        else{
            res.send(book);
        }
    })
})

app.listen(1234,()=>{
    console.log("Up and Running");
})