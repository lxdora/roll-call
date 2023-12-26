/**
 * 用户业务操作
 */

 const validator = require('validator')
 const studentsModel = require('./../models/students')
 const studentsCode = require('./../codes/students')
 
 const students = {
 
   /**
    * 创建用户
    * @param  {object} students 用户信息
    * @return {object}      创建结果
    */
   async create( students ) {
     let result = await studentsModel.create(students)
     return result
   },
   async update( students ) {
     let result = await studentsModel.update(students)
     return result
   },
   async delete( id ) {
     let result = await studentsModel.delete(id)
     return result
   },
   async get( id ) {
     let result = await studentsModel.get(id)
     return result
   },
 

 }
 
 module.exports = students