// 案例5 【验证不成功】
// 严格模式下，set代理返回false或者undefined，都会报错
// 严格模式 - 文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
'use strict'
const proxy5 = new Proxy({}, {
  set(target, p, value, receiver) {
    target[p] = value
    // 无论有没有下面这一行，都会报错
    // return false
    // return undefined
    return true
  }
})

proxy5.foo = 'bar'
