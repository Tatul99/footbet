<template>
  <div class="main">
    <div class="title text-h4 row justify-center">Матчи</div>
    <div class="row justify-center">
      <div class="col-4">
        <div class="row justify-between">
          <button
            class="btn cursor-pointer"
            v-for="(item, i) in btnName"
            :key="item"
            @click="activeIndex = i"
            :class="activeIndex == i ? 'activebtn' : ''"
          >
            <p class="text">{{ item }}</p>

            <div :class="activeIndex === i ? 'activeLine' : 'line'"></div>
          </button>
        </div>
      </div>
    </div>
    <matches-compo />
  </div>
</template>

<script>
import MatchesCompo from "./matches-compo.vue";
export default {
  components: { MatchesCompo },
  data() {
    return {
      activeIndex: 0,
      btnName: ["Матчи дня", "Правила игры"],
    };
  },
};
</script>

<style scoped>
.main {
  background: #102135;
}
.btn {
  background: linear-gradient(
    80.04deg,
    #040749 1.6%,
    rgba(44, 44, 44, 0) 106.17%
  );
  /* width: 170px; */
  border: unset;
  position: relative;
}
.line {
  position: absolute;
  width: 0px;
  height: 70px;
  left: 10px;
  top: -1px;

  border: 1px solid #d10a52;
}
.text {
  margin: 0;
  /* line-height: 60px; */
  padding: 20px 30px 20px 30px;
  font-size: 26px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
}
.activeLine {
  position: absolute;
  width: 0px;
  height: 70px;
  left: 10px;
  top: -1px;
  border: 1px solid #102135;
}
.activebtn {
  height: 63px;
  position: relative;
  margin-right: 40px;
  background: linear-gradient(
    80.04deg,
    #d10a52 1.6%,
    rgba(5, 5, 11, 0) 106.17%
  );
}
</style>
