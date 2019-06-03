const WIDTH = 1024
const HEIGHT = 768
// 绘制圆的半径
const Radius = 5
// 第一个数字距离左边画布的距离
const CANVAS_LEFT = 5
// 距离上边画布的距离
const CANVAS_TOP = 5
// 字符之间的距离
const SAME_DIS = 2.5
window.onload = function () {
  // 初始化绘制环境
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  // 绘制
  setInterval(function () {
    render(context)
  }, 50)
  // render(context)
}

/**
 * 绘制函数
 * @param {上下文} cxt 
 */
function render (cxt) {
  // 首先把屏幕清空
  cxt.clearRect(0, 0, WIDTH, HEIGHT)
  // 获取时间 
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  // hours/minutes/seconds两个数字之前分开5，一个圆20,数字140,冒号80
  // 不同字符之间分开25
  // 小时
  renderDigit(CANVAS_LEFT, CANVAS_TOP, parseInt(hours / 10), cxt)
  renderDigit(Radius*14 + SAME_DIS + CANVAS_LEFT, CANVAS_TOP, hours % 10 , cxt)
  // 冒号
  renderDigit(Radius*28 + SAME_DIS*6 + CANVAS_LEFT, CANVAS_TOP, 10 , cxt)
  // 分钟
  renderDigit(Radius*36 + SAME_DIS*11 + CANVAS_LEFT, CANVAS_TOP, parseInt(minutes / 10), cxt)
  renderDigit(Radius*50 + SAME_DIS*12 + CANVAS_LEFT, CANVAS_TOP, minutes % 10, cxt)
  // 冒号
  renderDigit(Radius*64 + SAME_DIS*17 + CANVAS_LEFT, CANVAS_TOP, 10 , cxt)
  // 秒
  renderDigit(Radius*72 + SAME_DIS*22 + CANVAS_LEFT, CANVAS_TOP, parseInt(seconds / 10), cxt)
  renderDigit(Radius*86 + SAME_DIS*23 + CANVAS_LEFT, CANVAS_TOP, seconds % 10 , cxt)
}

/**
 * 
 * @param {横坐标} x 
 * @param {纵坐标} y 
 * @param {要绘制的数字} num 
 * @param {上下文} cxt 
 */
function renderDigit (x, y, num, cxt) {
  // 给绘制的图形颜色
  cxt.fillStyle = "rgb(0, 102, 153)"
  // 循环digit绘制
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      // 如果是1的话就要绘制图形
      if (digit[num][i][j] === 1) {
        cxt.beginPath()
        cxt.arc(x + 2*Radius*j, y + 2*Radius*i, Radius, 0, Math.PI*2)
        cxt.closePath()
        cxt.fill()
      }
    }
  }
}