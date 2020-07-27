<template>
  <div>
    <header>
      <!-- 左边两个logo牌子 -->
      <div class="top-left">
        <img class="top-left1" src="../../assets/img/row/top-left1.png" />
        <img class="top-left2" src="../../assets/img/row/top-left2.png" />
      </div>
      <!-- 中间的时间 -->
      <div class="top-middle">
        <div class="day">
          <span>{{day}}</span>天
        </div>
        <div class="time">
          <span>{{hour}}:</span>
          <span>{{minute}}:</span>
          <span>{{second}}:</span>
          <img src="../../assets/img/row/time.gif" alt />
        </div>
        <div class="day">倒计时</div>
      </div>
      <!-- 右边发光字 -->
      <div class="top-right">
        <div class="step1"></div>
        <div class="step2"></div>
        <div class="step3"></div>
        <div class="step4"></div>
        <div class="step5"></div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: 6,
      hour: "00",
      minute: "00",
      second: "00"
    };
  },
  methods: {
    //为小于0的数添加0
    addZero(time) {
      return time < 10 ? "0" + time : time;
    }
  },
  mounted() {
    let _this = this;
    let now = new Date();
    let second, minute, hour;
    //初始化时间
    this.second = this.addZero(now.getSeconds());
    this.minute = this.addZero(now.getMinutes());
    this.hour = this.addZero(now.getHours());

    //倒计时，时分秒分开渲染，节省内存
    setInterval(function() {
      now = new Date();
      second = now.getSeconds();
      _this.second = _this.addZero(second);
      if (second === 0) {
        minute = now.getMinutes();
        _this.minute = _this.addZero(minute);
        if (minute === 0) {
          hour = now.getHours();
          _this.hour = _this.addZero(hour);
        }
      }
    }, 1000);
  }
};
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  top: 5%;
  display: flex;
  justify-content: center;
  padding: 0 3%;
  align-items: center;
  height: 150px;
  width: 100%;
  box-sizing: border-box;
}
.top-left,
.top-right {
  position: relative;
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
}
.top-left {
  background: url("../../assets/img/row/top-left-bg.png") no-repeat;
  background-size: 100% 100%;
  padding-right: 35px;
  margin-right: 35px;
}
.top-left1 {
  position: absolute;
  animation: top-left-rotate1 8s infinite;
}
.top-left2 {
  position: absolute;
  transform: rotateX(180deg);
  animation: top-left-rotate2 8s infinite;
  opacity: 0;
}

.top-right {
  background: url("../../assets/img/row/top-right-bg.png") no-repeat;
  background-size: 100% 100%;
  padding-left: 35px;
  margin-left: 35px;
  div {
    background-size: 100% 100%;
    width: 80px;
    height: 80px;
  }
}
.top-middle {
  background: url("../../assets/img/row/top-middle-bg.png") no-repeat;
  background-size: 100% 100%;
  width: 700px;
  height: 100%;
  margin-top: -30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .day {
    width: 50px;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: rgba(95, 10, 203, 0.6);
    color: #fadaf7;
    border-radius: 12px;
    text-align: center;
    font-size: 30px;
    text-shadow: 0 3px 0 #e14fc1;
    span {
      font-size: 2em;
    }
  }
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120px;
    text-align: center;
    color: #fadaf7;
    text-shadow: 0 5px 0 #e14fc1;
  }
}
@for $i from 1 through 5 {
  .step#{$i} {
    animation: 3s top-right-step#{$i} infinite;
  }
}
.step1 {
  background: url("../../assets/img/row/text-1.png") no-repeat;
}
.step3 {
  background: url("../../assets/img/row/text-3.png") no-repeat;
}
.step5 {
  background: url("../../assets/img/row/text-5.png") no-repeat;
}
.step2,
.step4 {
  background: url("../../assets/img/row/arrow.png") no-repeat;
}

@keyframes top-left-rotate1 {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  20% {
    opacity: 1;
    transform: rotateX(0deg);
  }

  30% {
    opacity: 0;
    transform: rotateX(180deg);
  }
  70% {
    opacity: 0;
    transform: rotateX(180deg);
  }
  80% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
@keyframes top-left-rotate2 {
  0% {
    opacity: 0;
    transform: rotateX(-180deg);
  }
  20% {
    opacity: 0;
    transform: rotateX(-180deg);
  }

  30% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  70% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  80% {
    opacity: 0;
    transform: rotateX(-180deg);
  }
  100% {
    opacity: 0;
    transform: rotateX(-180deg);
  }
}
@keyframes top-right-step1 {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  61% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes top-right-step2 {
  0% {
    opacity: 0.2;
  }
  5% {
    opacity: 0.2;
  }
  6% {
    opacity: 1;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes top-right-step3 {
  0% {
    opacity: 0.2;
  }
  10% {
    opacity: 0.2;
  }
  11% {
    opacity: 1;
  }
  71% {
    opacity: 1;
  }
  72% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes top-right-step4 {
  0% {
    opacity: 0.2;
  }
  15% {
    opacity: 0.2;
  }
  16% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes top-right-step5 {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 0.2;
  }
  21% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  81% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
</style>