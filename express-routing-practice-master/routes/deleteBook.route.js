const controller=require('../controller/books.controller')
const express=require('express')
const router=express.Router()
router.route('/deleteBook').delete(controller.deleteBook)
module.exports=router
