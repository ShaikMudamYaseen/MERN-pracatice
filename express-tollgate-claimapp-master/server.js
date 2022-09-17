const express=require('express')
const app=express()
const serverService=require('./server.service')
const config=require('./config/app.config')
serverService.createDbConnection()
serverService.middewares(app)
serverService.routes(app)
app.listen(config.PORT,()=>console.log(`listening in ${config.PORT}`))
module.exports={
    app
}
