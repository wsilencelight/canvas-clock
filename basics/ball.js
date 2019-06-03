const ball = {
  x: 10,
  y: 100,
  // 半径
  r: 10,
  // 加速度
  g: 1,
  // 水平初速度
  vx: 20,
  // 竖直初速度
  vy: -20
}
const WIDTH = 1024
const HEIGHT = 500
// 最小速度
const minSpeed = 0.5
window.onload = function () {
  let canvas = document.getElementById('canvas') 
  canvas.width = WIDTH
  canvas.height = HEIGHT
  let context = canvas.getContext('2d')
 
  setInterval(() => {
    render(context)
    update()
  }, 50)
}

// 绘制
function render (cxt) {
  cxt.clearRect(0, 0, WIDTH, HEIGHT)
  cxt.fillStyle = "red"
  cxt.beginPath()
  cxt.arc(ball.x, ball.y, ball.r, 0, Math.PI*2)
  cxt.fill()
  cxt.closePath()
}
// 更新小球的位置
function update() {
  // 四条边的反弹,难点中的难点就是让小球停下来
  if (ball.y + ball.r > HEIGHT) {
    ball.vy = -ball.vy * 0.5
    // 不这样改会有点小bug，当小球下坠某一帧掉到最下边以下，上下把速度耗完无法反弹
    ball.y = HEIGHT - ball.r
    ifZero()
  } else if (ball.y - ball.r < 0) {
    ball.vy = -ball.vy * 0.5
    ball.y = ball.r
  } else if (ball.x + ball.r > WIDTH) {
    ball.vx = -ball.vx * 0.5
    ball.x = WIDTH - ball.r
    ifZero()
  } else if (ball.x - ball.r < 0) {
    ball.vx = -ball.vx * 0.5
    ball.x = ball.r
    ifZero()
  } else {
    if (ball.vy != 0) {
      ball.y += ball.vy
      ball.vy += ball.g
    }
    if (ball.vx != 0) {
      ball.x += ball.vx
    }
  }
}

// 判断是否应该将速度降为0
function ifZero () {
    // 速度降到一定时停止
   if (Math.abs(ball.vx) < 1) {
     ball.vx = 0
   }
   if (Math.abs(ball.vy) < 1) {
     ball.vy = 0
     ball.y = HEIGHT - ball.r
   }
} 