const {PORT}=require('../config/server.config')
const controller=require('../controller/books.controller')
const express=require('express')
const app=express()
app.use(express.json())

app.get("/getBooks",controller.getBooks)
app.post("/addBook",controller.addBooks)
app.put("/updateBook/",controller.updateBook)
app.delete("/deleteBook/",controller.deleteBook)
app.listen(PORT,()=>{
    console.log(`listining in port ${PORT}`);
})