# vue3-directive-npm
## npm包地址
[npmjs.com/package/vue3-directive-npm](npmjs.com/package/vue3-directive-npm)
# 快速上手
## 功能描述
vue3常用自定义指令
+ v-copy 复制文本
+ v-click-outside 点击外部区域关闭当前元素
+ v-scroll-to 滚动到指定位置或元素
+ v-table-scroll 表格拖动（只支持ant-design-vue表格）
+ v-waterMark 图片添加水印
+ v-debounce 输入框防抖

## 安装
```shell
npm install vue3-directive-npm
```
## 全局注册（在main.ts文件里注册）
```javascript
import { Copy } from 'vue3-directive-npm'
```
## 局部注册（在你所使用的vue里注册）
```javascript
import { Copy } from 'vue3-directive-npm'
```
## 使用
shims-vue.d.ts新增以下代码
```js
declare module 'vue3-directive-npm'
```

+ v-copy 复制文本
```html
<p v-copy="'复制的文本'">点击复制文本</p>
```
+ v-scroll-to 滚动到指定位置或元素
```html
<a-button v-scroll-to="0">跳转到顶部</a-button>
<a-button v-scroll-to="'waterMark'">跳转到id为waterMark的元素</a-button>
```
+ v-table-scroll 表格拖动
```html
<a-table v-table-scroll :dataSource="dataSource" :columns="columns"/>
```

+ v-click-outside 点击外部区域关闭当前元素
```html
<a-card v-click-outside title="Default size card" style="width: 300px">
  <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
</a-card>
```
+ v-waterMark 图片添加水印
```html
<img v-waterMark="'我是水印'" src="@/assets/example.jpeg" height="300" width="400"/>

```
+ v-debounce 输入框防抖
（delay默认500）
```html
<input v-debounce="{fn: inputKeyUp, delay: 300}" v-model="value" />
```


## 测试demo
https://zlppp.github.io/vue3-directive/#/

