//  节流 时间戳版本 立即执行 先执行后等约定时间
function throttle(func, wait) {
  let previous = 0
  return function () {
    let now = Date.now()
    let context = this
    let args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}