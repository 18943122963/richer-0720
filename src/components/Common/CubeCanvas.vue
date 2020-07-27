<template>
  <div>
    <canvas id="canvas">抱歉，您的浏览器暂不支持canvas，请更换浏览器。</canvas>
    <img src="../../assets/img/row/avatar-border.png" id="avatar-border" v-show="false" />
  </div>
</template>
<script>
//定义一个方块类
class Cube {
  constructor(
    beginX = 0,
    beginY = 0,
    width = 100,
    height = 100,
    speedX = 1,
    speedY = 1
  ) {
    this.beginX = beginX;
    this.beginY = beginY;
    this.height = height;
    this.width = width;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  //设定速度并重置起点
  set(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
    this.beginX += speedX;
    this.beginY += speedY;
  }
  draw(ctx) {
    ctx.roundRect(this.beginX, this.beginY, this.width, this.height);
  }
}
export default {
  data() {
    return {
      canvas: undefined,
      ctx: undefined,
      cubes: [],
      imgUrl: require("@/assets/img/row/empty_avatar.png")
    };
  },
  methods: {
    //创建小方块组
    creatCube() {
      this.cubes.push(
        new Cube(10, 10, 100, 100, 1, 1),
        new Cube(20, 20, 200, 200, 1, 2),
        new Cube(30, 30, 250, 250, 1, 0),
        new Cube(40, 40, 50, 50, 11, 2),
        new Cube(50, 50, 200, 200, 0, 2)
      );
    },
    //绘制
    drawFrame() {
      //清空
      this.canvas.height = this.canvas.height;
      //循环渲染方块
      for (let cube of this.cubes) {
        //利用速度设定起始位置，如当前是0，0，速度为1，1，那么下次渲染位置应在0+1，0+1
        cube.set(cube.speedX, cube.speedY);
        //如果向左右碰壁了，X速度反向
        if (cube.beginX + cube.width > this.canvas.width) {
          cube.speedX = -cube.speedX;
        }
        if (cube.beginX < 0) {
          cube.speedX = -cube.speedX;
        }
        //如果向上下碰壁了，Y速度反向
        if (cube.beginY + cube.height > this.canvas.height) {
          cube.speedY = -cube.speedY;
        }
        if (cube.beginY < 0) {
          cube.speedY = -cube.speedY;
        }
        //绘制
        cube.draw(this.ctx);
      }
      //循环
      window.requestAnimationFrame(this.drawFrame);
    },
    //注册一个canvas圆角矩形
    registerCanvasRound() {
      CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        //添加外框
        this.drawImage(document.getElementById("avatar-border"), x, y, w, h);

        //添加内容并裁剪
        //将头像裁剪的公式，外框图计算来的
        x += w * 0.22;
        y += h * 0.29;
        w *= 0.662;
        h *= 0.578;
        r = w / 4; //圆角
        let img = new Image();
        img.src =
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557351520,3025082445&fm=26&gp=0.jpg";
        //裁剪
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        this.save();
        this.clip();
        this.drawImage(img, x, y, w, h);
        this.restore();

        return this;
      };
    },
    //根据横竖屏决定canvas渲染范围
    canvasRenderSize() {
      let heightSize = 1,
        widthSize = 1;
      let dom;
      //若是横屏，则读取bg2的长宽，若是竖屏，读取cubecanvas
      if (document.getElementsByClassName("bg2")[0]) {
        dom = window.getComputedStyle(
          document.getElementsByClassName("bg2")[0]
        );
        heightSize = 0.9;
        widthSize = 0.6;
      }
      //竖屏
      else if (document.getElementsByClassName("CubeCanvas")[0]) {
        dom = window.getComputedStyle(
          document.getElementsByClassName("CubeCanvas")[0]
        );
        heightSize = 1;
        widthSize = 1;
      }

      this.canvas.width = parseInt(dom.width) * heightSize;
      this.canvas.height = parseInt(dom.height) * widthSize;
      //页面变化时canvas需要变化，需要重置小球，否则在外的小球无法回来
      window.onresize = () => {
        this.canvas.width = parseInt(dom.width) * heightSize;
        this.canvas.height = parseInt(dom.height) * widthSize;
        this.cubes = [];
        this.creatCube();
      };
    }
  },
  mounted() {
    //注册一个canvas圆角矩形
    this.registerCanvasRound();
    //初始化canvas
    this.canvas = document.getElementById("canvas");
    //渲染cavas大小
    this.canvasRenderSize();
    //初始化画笔
    this.ctx = this.canvas.getContext("2d");
    //建立一组默认的方块
    this.creatCube();
    //开始绘制
    this.drawFrame();
  }
};
</script>
<style lang="scss" scoped>
div {
  font-size: 0;
}
</style>