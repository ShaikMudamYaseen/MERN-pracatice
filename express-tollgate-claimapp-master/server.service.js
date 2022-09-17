const express=require('express')

const {dbConnection} =require('./db/db_connection')
const claimRoute=require('./routes/claimRoute')
const createDbConnection=()=>{
    dbConnection()
    // console.log("khsfhdkj");
}
const middewares=(app)=>{
    app.use(express.json())
    app.use(express.query())
    app.use(express.urlencoded({extended:true}))


}

const routes=(app)=>{
    app.use("/api/claims",claimRoute)



}
module.exports={
    createDbConnection,
    middewares,
    routes
}