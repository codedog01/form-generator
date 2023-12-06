/*
 * @Author: lengao 841423154@qq.com
 * @Date: 2023-12-06 10:33:13
 * @LastEditors: lengao 841423154@qq.com
 * @LastEditTime: 2023-12-06 10:33:17
 * @FilePath: \form-generator-dev\src\components\render\slots\ts-text.js
 * @Description:
 */
export default {
  span(h, conf, key) {
    return conf.__slot__[key]
  }
}
