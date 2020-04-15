//  立即执行版本 先执行一次 约定间隔后再执行下一次 即先执行再等待约定间隔时间
function debounce (func, wait) {
  let timeout
  return function () {
    //  防抖函数的代码使用这两行代码来获取 this 和 参数
    //  是为了让 debounce 函数最终返回的函数 this 指向不变以及依旧能接受到 e 参数。
    let context = this
    let args = arguments

    //  1.如果首次进入函数 timeout为假 让callNow取其反值 直接执行func函数
    //  2.如果再次进入函数 而定时器间隔时间未到 timeout为真值 
    //  则会clearTimeout(timeout) callNow取假值 此时新的timeout值又产生 重新计时
    //  3.如果再次进入函数 而定时器间隔时间已过 timeout在定时器内设置为null 为假值
    //  此时callNow为真值 开启新的定时器 函数func执行
    if (timeout) clearTimeout(timeout)
    
    let callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    },wait)

    if (callNow) func.apply(context, args)
  }
}