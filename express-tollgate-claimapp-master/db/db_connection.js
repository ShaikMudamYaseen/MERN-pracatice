const mongoose=require('mongoose')
const config=require("../config/app.config")
const dbConnection=()=>{
    mongoose.connect(config.mongoUrl).then(res=>console.log("connected to mongodb")).catch(err=>console.log(err))
}

module.exports={
    dbConnection
}
