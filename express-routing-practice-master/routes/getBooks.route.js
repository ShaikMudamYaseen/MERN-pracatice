const controller=require('../controller/books.controller')
const express=require('express')
const router=express.Router()
router.route('/getBooks').get(controller.getBooks)
module.exports=router
