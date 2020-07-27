<template>
  <div class="home">
    <!-- 紫色背景层 -->
    <div class="bg1">
      <div class="left"></div>
      <div class="fill-left"></div>
      <div class="center"></div>
      <div class="fill-right"></div>
      <div class="right"></div>
    </div>
    <div class="bg2">
      <!-- 点阵层 -->
      <div class="point"></div>
      <!-- 金币背景层 -->
      <div class="coins">
        <div class="coin-left"></div>
        <div class="coin-right"></div>
      </div>
      <!-- canvas层 -->
      <CubeCanvas class="CubeCanvas"></CubeCanvas>
    </div>
    <!-- 上方时间 -->
    <HeaderTime></HeaderTime>
    <!-- 中部的游戏中心 -->
    <GameCenter class="GameCenter"></GameCenter>
    <!-- 底部按钮 -->
    <FooterButton></FooterButton>

    <div class="infoBoxOut">
      <div class="infoBox">人人有奖 参与即得{{info}}</div>
    </div>
  </div>
</template>

<script>
import CubeCanvas from "../components/Common/CubeCanvas";
import HeaderTime from "../components/Row/HeaderTime";
import GameCenter from "../components/Row/GameCenter";
import FooterButton from "../components/Row/FooterButton";
import { resize } from "../../src/utils/zoom";
export default {
  components: {
    CubeCanvas,
    HeaderTime,
    GameCenter,
    FooterButton
  },
  data() {
    return {
      info: "合肥保利mall精美礼品",
      websocket: undefined
    };
  },
  mounted() {
    window.onresize = () => {
      //若竖屏
      if (window.innerHeight > window.innerWidth) {
        this.$router.push("/Column");
      }
      document.getElementById("app").style.cssText = "zoom:" + resize();
    };
    if (typeof WebSocket === "undefined") {
      alert("您的浏览器不支持WebSocket，请更换浏览器");
    } else {
      this.websocket = new WebSocket(
        "ws://wbs.getaria.dface.cn/webs_redis?activityId=7002&groupId=2617",
        "protocol-name"
      );
      // 监听socket连接
      this.websocket.onopen = () => {
        console.log("链接成功");
      };
      // 监听socket错误信息
      this.websocket.onerror = () => {
        console.log("链接失败");
      };
      // 监听socket消息
      this.websocket.onmessage = mes => {
        console.log("正在监听", mes);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.home,
.bg1 {
  height: 100%;
  width: 100%;
}
.bg1 {
  display: flex;
}
.left {
  background: url("../assets/img/row/left.png") no-repeat;
}
.right {
  background: url("../assets/img/row/right.png") no-repeat;
}
.left,
.right {
  width: 460px;
  height: 100%;
  background-size: 100% 100%;
}
.center {
  width: 880px;
  height: 100%;
  background: url("../assets/img/row/center.png") no-repeat;
  background-size: 100% 100%;
}
.fill-left {
  background: url("../assets/img/row/fill-left.png") repeat-x;
}
.fill-right {
  background: url("../assets/img/row/fill-right.png") repeat-x;
}
.fill-left,
.fill-right {
  height: 100%;
  background-size: 100% 100%;
  flex: 1;
  /* 因为小数出现空隙，让他拉伸一点 */
  margin: 0 -3px;
}

.bg2 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.coins {
  opacity: 0.7;
  position: absolute;
  width: 90%;
  height: 60%;
  margin: auto;
  .coin-left {
    background: url("../assets/img/row/coins.png");
    width: 50%;
    height: 100%;
    background-size: auto 100%;
    background-position: 0;
    display: inline-block;
  }
  .coin-right {
    background: url("../assets/img/row/coins.png");
    width: 50%;
    height: 100%;
    background-size: auto 100%;
    background-position: 100%;
    display: inline-block;
  }
}
.point {
  background: url("../assets/img/row/point.png") no-repeat;
  background-size: 100% 100%;
  height: 94%;
  width: calc(100% - 60px);
}
.content {
  position: absolute;
  top: 0;
  width: 100%;
}
.infoBoxOut {
  position: fixed;
  width: 100%;
  animation: animateTopIn 10s infinite;
  .infoBox {
    margin: 0 auto;
    width: 940px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 55px;
    border: 6px solid #9977c0;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
}
.CubeCanvas {
  position: absolute;
  margin: auto;
}
.GameCenter {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes animateTopIn {
  0% {
    top: 100%;
    opacity: 0;
  }
  20% {
    top: 100%;
    opacity: 0;
  }
  30% {
    top: 84%;
    opacity: 1;
  }
  80% {
    top: 84%;
    opacity: 1;
  }
  90% {
    top: 80%;
    opacity: 0;
  }
  100% {
    top: 80%;
    opacity: 0;
  }
}
</style>