/**
 * @Description:文本框防抖自定义指令
 */
import { App } from 'vue'

function Debounce (app:App, options: any) {
  app.directive('debounce', {
    beforeMount: (el, binding) => {
      let { fn, delay } = binding.value
      let timer:any = null
      el.addEventListener('keyup', function() { // 给文本框添加keyup事件
        if (timer) { clearTimeout(timer) } // 如果timer有值，清空定时器
        timer = setTimeout(() => {
          fn.apply(this) // 执行函数
          timer = null
        }, delay || 500)
      })
    }
  })
}

export default Debounce