//  节流 定时器版本 非立即执行 先等约定时间后执行
function throttle (func, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}