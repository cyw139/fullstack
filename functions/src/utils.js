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

// bind
function bind(fn, obj, ...args1) {
  return function(...args2) {
    return call(fn, obj, ...args1, ...args2)
  }
}

// map
function map(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  return result
}

// reduce
function reduce(arr, callback, sum) {
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i])
  }
  return sum
}

// filter
function filter(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i) && result.push(arr[i])
  }
  return result
}

// find
function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i]
    }
  }
  return undefined
}
// findIndex
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i
    }
  }
  return -1
}
