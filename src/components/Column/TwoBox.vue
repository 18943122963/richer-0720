<template>
  <div class="twobox">
    <div class="left-box">
      <img src="../../assets/img/column/top3.png" alt />
      <div class="top3">
        <div v-for="(item,index) in top3" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="right-box">
      <img src="../../assets/img/row/game-ad-left.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top3: ["第一个", "第二个", "第三个"]
    };
  }
};
</script>
<style lang="scss"scoped>
.twobox {
  display: flex;
}
.left-box {
  position: absolute;
  left: 4.5%;
  right: 44.5%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .top3 {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    div {
      color: #fff;
      font-size: 1.5rem;
    }
  }
  img {
    width: 50%;
  }
}
.right-box {
  position: absolute;
  left: 64%;
  right: 7.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
}
</style>