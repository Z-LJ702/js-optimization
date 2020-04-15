//  综合版本 
//  type为1 时间戳 立即版本 type为2 定时器 非立即版本
function throttle (func, wait, type) {
  let previous = 0
  let timeout

  //  下面代码用let的话报错,用var会提升
  // if(type===1){
  //   var previous = 0;
  // }else if(type===2){
  //   var timeout;
  // }
  
  return function () {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if(type === 2){
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
    
  }
}