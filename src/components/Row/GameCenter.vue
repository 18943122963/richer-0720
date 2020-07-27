<template>
  <div>
    <article>
      <!-- 内容层 -->
      <div class="game-center">
        <div class="game-title">{{game.title}}</div>
        <div class="game-progress"></div>
        <!-- 奖品及二维码 -->
        <div class="game-center-ad">
          <div class="left-ad"></div>
          <div class="right-ad"></div>
        </div>
        <!-- 小按钮 -->
        <div class="game-bottom-ad">
          <div class="game-button"></div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      game: {
        title: "2999华为nova6",
        person: 7,
        person_max: 600,
        value: 2999,
        price: 5
      }
    };
  }
};
</script>
<style lang="scss" scoped>
article {
  height: 800px;
  border-radius: 20px;
  position: relative;
  margin: 38px 30px 0;
}

.game-center {
  position: relative;
  width: 1192px;
  height: 829px;
  padding: 64px 210px 110px 201px;
  margin: 0 auto;
  background: url("../../assets/img/row/main.png") 50% no-repeat;
  background-size: 100% 100%;
  border-radius: 20px;
  box-sizing: border-box;
}
.game-title {
  width: 510px;
  height: 60px;
  margin: 0 auto 50px;
  line-height: 60px;
  background-image: linear-gradient(
    90deg,
    rgba(231, 37, 0, 0),
    #e72500,
    rgba(231, 37, 0, 0)
  );
  color: #fff;
  font-size: 36px;
  overflow: hidden;
  border-top: 2px solid #f7985f;
  border-bottom: 2px solid #f7985f;
  border-radius: 30px;
  text-align: center;
}
.game-progress {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.game-center-ad {
  display: flex;
  width: 100%;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 0 80px 0 70px;
  margin-top: 60px;
  box-sizing: border-box;
  background-clip: padding-box;
  .left-ad {
    background: url("../../assets/img/row/game-ad-left.png") no-repeat;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-size: 100% 100%;
    width: 275px;
    height: 275px;
  }
  .right-ad {
    background: url("../../assets/img/row/game-ad-right.png") no-repeat;
    background-size: 100% 100%;
    width: 275px;
    height: 275px;
  }
}
.game-bottom-ad {
  position: relative;
  left: 0;
  top: 90px;
  height: 65px;
  width: 100%;

  box-sizing: border-box;
  background-clip: padding-box;
}
.green-button {
  position: relative;
  top: 10px;
  display: inline-block;
  width: 66px;
  height: 44px;
  background-size: cover;
  background: url("../../assets/img/row/green-button.png") 0 100% no-repeat;
  box-sizing: border-box;
  background-clip: padding-box;
}
.green-button-1 {
  left: 155px;
}
.green-button-2 {
  left: 144px;
}
.game-button {
  position: absolute;
  right: 48px;
  top: -50px;
  width: 90px;
  height: 118px;
  background: url("../../assets/img/row/game-button.png") 50% no-repeat;
  background-size: cover;
  animation: playBtnAnimate 0.4s infinite;
  transform-origin: 45px 83px;
  animation-play-state: paused;
}
.game-price {
  position: relative;
  left: 150px;
  top: -10px;
  display: inline-block;
  width: 320px;
  height: 65px;
  color: #df0c00;
  text-align: center;
  font-size: 26px;
  line-height: 85px;
  box-sizing: border-box;
  background-clip: padding-box;
}
</style>