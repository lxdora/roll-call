const studentsInfoService = require('./../services/students')
const studentsCode = require('./../codes/students')

module.exports = {

  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async create( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let studentsResult = await studentsInfoService.create( formData )

    if ( studentsResult ) {
      result.success = true
    }
    ctx.body = result
  },
  async get( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let studentsResult = await studentsInfoService.get( formData )

    if ( studentsResult ) {
      result.success = true
    }
    ctx.body = result
  },
  async update( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let studentsResult = await studentsInfoService.update( formData )

    if ( studentsResult ) {
      result.success = true
    }
    ctx.body = result
  },
  async delete( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let studentsResult = await studentsInfoService.delete( formData )

    if ( studentsResult ) {
      result.success = true
    }
    ctx.body = result
  },
}