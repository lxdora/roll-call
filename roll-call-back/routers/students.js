/**
 * restful api 子路由
 */

 const router = require('koa-router')()
 const studentsController = require('./../controllers/students')
 
 const routers = router
   .post('/create', studentsController.create)
   .post('/delete', studentsController.delete)
   .get('/get', studentsController.get)
   .post('/update', studentsController.update)
  
   
 module.exports = routers