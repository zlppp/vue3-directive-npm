/**
 * @Description: 点击元素滚动到指定位置或元素
 * @version: 1.0.0
 * @Company: 首展
 * @author: zhangliping
 * @Date: 2021-06-01
 * @lastEditors: zhangliping
 * @LastEditTime: 2021-06-01
 */
import { App } from 'vue'

let ScrollTo:any = {}

ScrollTo.install = function (app:App, options:any) {
  app.directive('scroll-to', {
    mounted (el, binding) {
      el.addEventListener('click', () => {
        if (typeof binding.value === 'number' ) {
          document.documentElement.scrollTop = binding.value
        }
        if (typeof binding.value === 'string') {
          let top = document.getElementById(binding.value)?.offsetTop
          top && (document.documentElement.scrollTop = top)
        }
      })
    }
  })
}

export default ScrollTo