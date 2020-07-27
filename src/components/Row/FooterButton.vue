<template>
  <div>
    <footer>
      <div class="left-button">
        <i></i>
        <span>人人有奖</span>
      </div>
      <div class="right-button">
        <i></i>
        <span>现场开奖</span>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
footer {
  position: absolute;
  top: 83.5%;
  left: 30px;
  right: 30px;
  overflow: hidden;
  div {
    width: 262px;
    height: 117px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
  }
  i {
    width: 50px;
    height: 50px;
  }
  .left-button {
    background: url("../../assets/img/row/bottom-left-button.png") no-repeat;
    background-size: 100% 100%;
    float: left;
    i {
      background: url("../../assets/img/row/bottom-left-logo.png") 50% no-repeat;
      background-size: 100% 100%;
    }
    span {
      text-shadow: 0 0 10px #a1137b;
    }
  }
  .right-button {
    background: url("../../assets/img/row/bottom-right-button.png") no-repeat;
    background-size: 100% 100%;
    float: right;
    i {
      background: url("../../assets/img/row/bottom-right-logo.png") 50%
        no-repeat;
      background-size: 100% 100%;
    }
    span {
      text-shadow: 0 0 10px #9eeaff;
    }
  }
}
</style>