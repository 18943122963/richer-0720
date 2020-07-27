<template>
  <div class="bg">
    <div class="up-box">
      <HeaderTime></HeaderTime>
      <CubeCanvas class="CubeCanvas"></CubeCanvas>
      <GameCenter class="GameCenter"></GameCenter>
    </div>
    <div class="mid-text">
      <span class="news">{{text}}</span>
    </div>
    <div class="bottom-box">
      <TwoBox class="TwoBox"></TwoBox>
    </div>
  </div>
</template>
<script>
import HeaderTime from "../components/Column/HeaderTime";
import CubeCanvas from "../components/Common/CubeCanvas";
import GameCenter from "../components/Column/GameCenter";
import TwoBox from "../components/Column/TwoBox";
import { resize } from "../../src/utils/zoom";
export default {
  components: {
    HeaderTime,
    CubeCanvas,
    GameCenter,
    TwoBox
  },
  data() {
    return {
      text: "恭喜xxx获得xxx"
    };
  },
  mounted() {
    window.onresize = () => {
      //若横屏
      if (window.innerHeight < window.innerWidth) {
        this.$router.push("/Row");
      }
      document.getElementById("app").style.cssText = "zoom:" + resize();
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_picture";
.bg {
  height: 1920px;
  width: 1080px;
  margin: auto;
  background: url($column-bg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}
.up-box {
  background: url("../assets/img/column/top.png") no-repeat;
  background-size: 100% 100%;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.CubeCanvas,
.GameCenter {
  position: absolute;
  height: 80%;
  width: 90%;
  top: 15%;
}
.CubeCanvas {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-text {
  position: absolute;
  color: #b966ff;
  font-size: 2rem;
  top: 55.5%;
  width: 100%;
  text-align: center;
  .news {
    margin: 0 auto;
  }
}
.bottom-box {
  position: absolute;
  top: 64%;
  bottom: 20.3%;
  width: 100%;
  .TwoBox {
    height: 52.3%;
  }
}
</style>