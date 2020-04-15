//  非立即执行版本 等约定间隔时间后 再执行
function debounce(func, wait) {
  let timeout
  return function() {
    //  防抖函数的代码使用这两行代码来获取 this 和 参数
    //  是为了让 debounce 函数最终返回的函数 this 指向不变以及依旧能接受到 e 参数。
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    },wait)
  }
}