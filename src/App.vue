<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Column from "./views/Column";
import { resize } from "../src/utils/zoom";
// import Column from "./views/Row";
export default {
  components: {
    Column
  },
  data() {
    return {
      zoom: 1
    };
  },
  mounted() {
    document.getElementById("app").style.cssText = "zoom:" + resize();
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "BEBAS NENU BOLD";
  src: url("../src/assets/font/bebasneue_bold-webfont.woff") format("woff");
}
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #300760;
  font-family: BEBAS NENU BOLD;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
