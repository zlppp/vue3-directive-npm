/**
 * @Description: 点击外部区域，关闭当前组件
 * @version: 1.0.0
 * @Company: 首展
 * @author: zhangliping
 * @Date: 2021-06-01
 * @lastEditors: zhangliping
 * @LastEditTime: 2021-06-01
 */
import { App } from 'vue'

let ClickOutside:any = {}

ClickOutside.install = function (app:App, options:any) {
  app.directive('clickOutside', {
    mounted (el, binding) {
      document.addEventListener('click', () => {
        el.style.display = 'none'
      })
      el.addEventListener('click', (event:any) => {
        event = event || window.event
        event.stopPropagation()
      })
    }
  })
}

export default ClickOutside