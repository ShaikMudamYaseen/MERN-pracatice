const controller=require('../controller/books.controller')
const express=require('express')
const router=express.Router()
router.route('/updateBook').put(controller.updateBook)
module.exports=router
