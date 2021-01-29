/**
 * @Author: tangzhicheng
 * @Date: 2021-01-23 23:48:32
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-01-24 22:13:23
 * @Description: file content
 */

import './style.scss'
import './test.scss'
import './Search.jsx'

const wm = new WeakMap()

Promise.resolve().finally()

const Log = () => {
  console.log(wm)
}

Log()
