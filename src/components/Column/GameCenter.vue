<template>
  <div>
    <div class="game-box" :style="gameBox">
      <div class="title">{{title}}</div>
      <div class="imgs">
        <img src="../../assets/img/row/game-ad-left.png" alt />
        <img src="../../assets/img/row/game-ad-right.png" alt />
      </div>
      <div class="price">需要游戏币：{{price}}枚</div>
    </div>
  </div>
</template>

<script>
import { loadPicture } from "../../utils/picture";
export default {
  data() {
    return {
      title: "2999元华为nova6",
      price: "5"
    };
  },
  computed: {
    ...loadPicture({
      gameBox: "gameBox"
    })
  }
};
</script>
<style lang="scss" scoped>
.game-box {
  width: 50%;
  height: 100%;
  margin: 5% auto 0;
  background: url("../../assets/img/column/game-box.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.title {
  position: absolute;
  top: 7%;
  width: 235px;
  background-image: linear-gradient(
    90deg,
    rgba(231, 37, 0, 0),
    #e72500,
    rgba(231, 37, 0, 0)
  );
  color: #fff;
  text-align: center;
  margin: 10px auto;
  font-size: 25px;
}
.imgs {
  width: 35%;
  position: absolute;
  top: 22%;
}
img {
  width: 100%;
}
.price {
  position: absolute;
  top: 72.2%;
  width: 35%;
  color: #df0c00;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
</style>