<template>
  <div class="top">
    <div class="top-right">
      <div class="step1"></div>
      <div class="step2"></div>
      <div class="step3"></div>
      <div class="step4"></div>
      <div class="step5"></div>
    </div>
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
.top-right {
  position: relative;
  position: absolute;
  left: 76%;
  right: 7%;
  top: 6.5%;
  bottom: 86%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-size: 100% 100%;
  div {
    background-size: 100% 100%;
    width: 20%;
    height: 100%;
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
.top {
  width: 100%;
}
.top-middle {
  position: relative;
  top: 45px;
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  .day {
    width: 20px;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: rgba(95, 10, 203, 0.6);
    color: #fadaf7;
    border-radius: 12px;
    text-align: center;
    font-size: 20px;
    text-shadow: 0 3px 0 #e14fc1;
    span {
      font-size: 2em;
    }
  }
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: #fadaf7;
    text-shadow: 0 5px 0 #e14fc1;
    height: 100%;
    img {
      height: 100%;
    }
  }
}
.ms {
  width: 69px;
  margin-top: 5px;
}
</style>