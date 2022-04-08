<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-6">
        <div class="row justify-between">
          <button
            class="btn cursor-pointer"
            v-for="(item, i) in btnName"
            :key="item"
            @click="changeTab(i)"
            :class="activeIndex == i ? 'activebtn' : ''"
          >
            <p class="text">{{ item.name }}</p>

            <div :class="activeIndex === i ? 'activeLine' : 'line'"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      btnName: [
        {
          name: "Прогнозы",
        },
        {
          name: "Оплата",
        },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
* {
  color: #fff;
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
  height: 62px;
  left: 10px;
  top: -1px;

  border: 1px solid #d10a52;
}
.text {
  margin: 0;
  /* line-height: 60px; */
  padding: 20px 30px 20px 30px;
}
.activeLine {
  position: absolute;
  width: 0px;
  height: 62px;
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
