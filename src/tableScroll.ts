/**
 * @Description: 表格拖动
 * @version: 1.0.0
 * @Company: 首展
 * @author: zhangliping
 * @Date: 2021-06-01
 * @lastEditors: zhangliping
 * @LastEditTime: 2021-06-01
 */
import { App } from 'vue'

let TableScroll:any = {}

TableScroll.install = function (app:App, options:any) {
  app.directive('table-scroll', {
    mounted (el, binding) {
      let drag = function (obj:any) {
        let gapX = 0
        let startx = 0
        obj.addEventListener('mousedown', start, false)
        function start (event:any) {
          event.preventDefault()
          event.stopPropagation()
          if (event.button === 0) { // 判断是否点击鼠标左键
            gapX = event.clientX
            startx = obj.scrollLeft // scroll的初始位置
            document.addEventListener('mousemove', move, false)
            document.addEventListener('mouseup', stop, false)
          }
        }
        function move (event:any) {
          event.preventDefault()
          event.stopPropagation()
          let left = event.clientX - gapX // 鼠标移动的相对距离
          obj.scrollLeft = startx - left
        }
        function stop () {
          document.removeEventListener('mousemove', move, false)
          document.removeEventListener('mouseup', stop, false)
        }
      }
      const scrollElm = el.querySelector('.ant-table-scroll .ant-table-body')
      if (scrollElm) {
        scrollElm.style.cursor = 'move'
        scrollElm.style.userSelect = 'none'
        drag(scrollElm)
      }
    }
  })
}

export default TableScroll