/**
 * @Description: 图片水印
 * @version: 1.0.0
 * @Company: 首展
 * @author: zhangliping
 * @Date: 2021-06-01
 * @lastEditors: zhangliping
 * @LastEditTime: 2021-06-01
 */
import { App } from 'vue'

let WaterMark:any = {}

WaterMark.install = function (app:App, options:any) {
  function watermarkText(text:string) {
    let watercanvas:HTMLCanvasElement = document.createElement('canvas')
    let trx = watercanvas.getContext('2d')
    // 根据文字长度设置画布长宽
    let textLen = text.length * 20
    watercanvas.width = textLen
    watercanvas.height = textLen
    // 找出中心点
    let cx = textLen / 2, cy = textLen / 2
    //坐标圆点设置到形状中心
    if (trx) {
      trx.translate(cx, cy)            
      // 逆时针旋转 45 度
      trx.rotate((Math.PI / 180) * -45)
      trx.translate(-cx, -cy)
      // 设置字体、颜色
      trx.font = '18px 黑体'
      trx.fillStyle = "rgba(255,255,255,.4)"
      trx.fillText(text, 0, textLen / 2)
      return watercanvas
    }
  }

  app.directive('waterMark', {
    mounted (el, binding) {
      console.log(el, 'ellllwater')
      let imgUrl = el.src
      let mycanvas =  document.createElement('canvas')
      let crx = mycanvas.getContext('2d')
      let img = new Image()
      img.src = imgUrl
      img.onload = function () {
        mycanvas.width = el.width
        mycanvas.height = el.height
        if (crx) {
          crx.drawImage(img, 0, 0,el.width,el.height)
          // 水印平铺图片
          crx.fillStyle = crx.createPattern(watermarkText(binding.value), 'repeat')
          crx.fillStyle = '#0000fff'
          crx.fillRect(0, 0, el.width, el.height)
        }
        // 替换原本图片
        el.parentNode.replaceChild(mycanvas, el)
      }
    }
  })
}

export default WaterMark