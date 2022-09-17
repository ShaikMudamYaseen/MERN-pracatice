const {PORT}=require('../config/server.config')
const express=require('express')
const app=express()
app.use(express.json())

app.use("/",require('../routes/getBooks.route'))
app.use("/",require('../routes/addbooks.route'))
app.use("/",require('../routes/updateBook.route'))
app.use("/",require('../routes/deleteBook.route'))


app.listen(PORT,()=>{
    console.log(`listining in port ${PORT}`);
})