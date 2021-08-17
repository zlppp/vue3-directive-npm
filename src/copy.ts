/**
 * @Description: 文本复制指令
 * @version: 1.0.0
 * @Company: 首展
 * @author: zhangliping
 * @Date: 2021-06-01
 * @lastEditors: zhangliping
 * @LastEditTime: 2021-06-01
 */

import { App } from 'vue'
import Clipboard from 'clipboard'
import { message } from 'ant-design-vue'

let Copy:any = {}

Copy.install = function (app: App, options: any) {
  app.directive('copy', {
    mounted(el, binding, vnode) {
      const clipboard = new Clipboard(el, {
        text () { return binding.value }
      })
      clipboard.on('success', e => {
        message.success('复制成功')
      })
      clipboard.on('error', e => {
        message.error('复制失败，请手动复制')
      })
      el._v_clipboard = clipboard
    },
    updated (el, binding) {
      el._v_clipboard.text = function () { return binding.value }
    },
    unmounted (el, binding) {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  })
}

export default Copy
