<template>
  <div class="header row justify-end" style="width: 100vw; min-height: 50px">
    <div
      class="col-11 column justify-end"
      :class="bool ? 'content' : ''"
      style="width: 96vw"
    >
      <headear-kap class="kap" v-if="bool" />
      <div class="row justify-center">
        <div class="football" v-if="bool"></div>
        <div class="col-12 col-md-11 q-mt-lg" :class="bool ? 'container' : ''">
          <div class="row justify-between">
            <div class="footballlogo" style=""></div>
            <div class="registr-div col-8 col-md-3 q-mt-lg">
              <div class="row justify-around">
                <div class="registr row">
                  <div class="icon1 q-mr-xs"></div>
                  Регистрация
                </div>
                <div class="vxod row">
                  <div class="icon2 q-mr-xs"></div>
                  Войти
                </div>
                <div class="lenguage row">
                  Рус.
                  <div class="icon3 q-ml-xs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadearKap from "./hedear-kap.vue";
export default {
  components: {
    HeadearKap,
  },

  mounted() {
    console.log(this.$route.path);
    if (this.$route.path == "/") {
      this.bool = true;
    } else bool = false;
  },
  data() {
    return {
      bool: false,
    };
  },
};
</script>

<style scoped>
.header {
  background: #151d27;
}
.footballlogo {
  background-image: url("../../public/headerImage/football24.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 221px;
  height: 221px;
}
.icon1 {
  background-image: url("../../public/headerImage/test.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 22px;
  height: 22px;
}
.icon2 {
  background-image: url("../../public/headerImage/viyti.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
}
.icon3 {
  background-image: url("../../public/headerImage/rusion-flag.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 21px;
  height: 22px;
  border-radius: 50%;
}
.content {
  height: 700px;
  background-image: url("../../public/headerImage/cux.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.football {
  background-image: url("../../public/headerImage/footballist.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 662px;
  height: 600px;
}
.container {
  position: absolute;
  top: 40px;
}

@media all and (max-width: 500px) {
  .footballlogo {
    width: 90px;
    height: 90px;
  }
  .content {
    height: 345px;
  }
  .football {
    width: 199px;
    height: 195px;
  }
  .kap {
    display: none;
  }
}
</style>
