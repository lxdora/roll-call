const router = require('koa-router')()
 const uploadController = require('./../controllers/upload')
 
 const routers = router
   .post('/upload', uploadController.upload)
  
   
 module.exports = routers