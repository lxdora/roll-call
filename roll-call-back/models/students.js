const dbUtils = require('./../utils/db-util')

const students = {
  async create(model) {
    let result = await dbUtils.insertData( 'students', model )
    return result;
  },
  async update(model) {
    let result = await dbUtils.updateData( 'students', model )
    return result;
  },
  async get(id) {
    let result = await dbUtils.findDataById( 'students', id )
    return result;
  },
  async delete(id) {
    let result = await dbUtils.delete( 'students', id )
    return result;
  },
}

module.exports = students