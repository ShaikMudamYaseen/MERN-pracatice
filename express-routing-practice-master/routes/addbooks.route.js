const controller=require('../controller/books.controller')
const express=require('express')
const router=express.Router()
router.route('/addBook').post(controller.addBooks)
module.exports=router