function throttle(callback, wait) {
  // 起始时间
  let start = 0

  return function (e) {
    const now = Date.now()
    if (now - start >= wait) {
      callback.call(this, e)
      start = now
    }
  }
}
