 /**
   * excel 导出
   * list:[{}]headers:表头中文名
   * headerKeys:与表头中文名一一对应的数据区key
   * tableName: 导出的表名称以什么开头
   */
const exportExcel = (list, headers, headerKeys, tableName = 'excel') => {
 //excel 通用样式
  const sheetOptions = { '!cols': [] }
  headers.forEach(() => {
    sheetOptions['!cols'].push({
      wch: 20
    })
  })
  const data = []
  list.forEach((item) => {
    let arr =[]
    const item2 = flatten(item)
    headerKeys.forEach((key) => {
      if (excelMap.changDictExport[key]){
        arr.push(excelMap.changDictExport[key][item[key]])
      } else {
        arr.push(item2[key])
      }})
      data.push(arr)
    })
  data.unshift(headers)
  const buffer = xlsx.build([{options: {}, name: `${tableName}_${new Date().valueof()}` , data: data }],{sheetOptions})
  return buffer
}


/**
 * 对象扁平化
 */
const flatten = (obj) => {
  let result = {}
  let process = (key, value) => {
    // 首先判断是基础数据类型还是引用数据类型
    if (Object(value) !== value){ // 基础数据类型
      if (key) {
        result[key] = value
      }
    }else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        process(`${key}[${i}]`, value[i])
      }
      if (value.length === 0) {
        result[key] = []
      }
    }else {
      let objArr = Object .keys(value)
      objArr.forEach((item) => {
        process(key ? `${key}.${item}` : ${item}, value[item])
      })
      if (objArr.length === 0 && key) {
        result[key] = {}
      }
    }
  }
  process('',obj)
  return result
}

