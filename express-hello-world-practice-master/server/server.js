const port=require('../config/server.config')
const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send('hello world')
}).listen(port.PORT,()=>{
    console.log(`listening in ${port.PORT}`);
})