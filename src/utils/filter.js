/**
 * created by wenaoxue on 2018/5/7
 */
import { List, isImmutable } from 'immutable'
const defaultOptions = {
  data: null, // 数据
  condition: [], // 条件
  fields: null, // 指定字段
  matchFn: (x, value) => !!(x + '').match(value) // 匹配方法
}
export default (options) => {
  let result = List()
  options = Object.assign({}, defaultOptions, options)
  if (options.data && isImmutable(options.data)) {
    options.data.map(record => {
      let isMatch = 0
      options.condition.map(value => {
        if (options.fields) {
          isMatch = record.filter((x, key) => {
            let bool = false
            options.fields.map(v => {
              if (v === key) {
                bool = options.matchFn(x, value)
              }
            })
            return bool
          }).size
        } else {
          isMatch = record.filter(x => options.matchFn(x, value)).size
        }
      })
      if (isMatch > 0) {
        result = result.push(record)
      }
    })
  } else {
    throw Error('data can not be null')
  }
  return result
}
