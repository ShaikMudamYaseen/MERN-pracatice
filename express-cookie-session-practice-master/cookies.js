const express=require('express');
const session=require("express-session");
const cookieParser=require("cookie-parser");
const app=express();

app.use(session({secret:"Secret Password",resave:false,saveUninitialized:true}));

app.use(cookieParser());
app.get("/",(req,res)=>{
    console.log(req.cookies)
    res.cookie('shoes','nike',{expires:new Date('09 May 2022')});
    res.cookie('chips','lays');
    res.send("Up");
});
app.get("/delete-cookies",(req,res)=>{
    res.clearCookie('chips');
    res.send("Cookie Deleted");
})

app.get("/session",(req,res)=>{
    if(req.session.total_visit){
        req.session.total_visit++;
        res.send(`You have visited this page ${req.session.total_visit} times`);
    }
    else{
        req.session.total_visit=1;
        res.send("Welcome to our site for first time");
    }
})

app.listen(1000)