// 节流
function throttle(callback, wait) {
  let start = 0

  return function (e) {
    const now = Date.now()
    if (now - start >= wait) {
      callback.call(this, e)
      start = now
    }
  }
}
// 防抖
function debounce(callback, wait) {
  let timeId = null
  return function (e) {
    if (timeId !== null) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      callback.call(this, e)
      timeId = null
    }, wait)
  }
}
// call函数封装
function call(fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis // es11
  }
  obj.tempFn = fn
  const result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}
// apply函数封装
function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis // es11
  }
  obj.tempFn = fn
  const result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}
