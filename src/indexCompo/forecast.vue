<template>
  <div class="col-12 bg-inherit">
    <div class="cont row justify-center">
      <div class="pragnoz text-h4">Прогнозы</div>
    </div>
  </div>
  <div class="content" style="min-height: 700px">
    <div class="q-pa-md stadion">
      <div class="row content2 justify-center items-center">
        <q-carousel
          style="height: 100%"
          class="carousel"
          animated
          v-model="slide"
          infinite
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide
            class="col-1 row justify-center items-center"
            :name="1"
          >
            <div class="matches col-7">
              <div class="row justify-between items-around full-height">
                <div class="col-3">
                  <div class="gerb"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">Барселона</div>
                    </div>
                  </div>
                </div>
                <div class="col-5 row items-start">
                  <div class="row justify-center items-center">
                    <div class="match-text">Игра начинается через</div>
                    <div class="time">09:16:14</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="gerb2"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">ПСЖ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="row justify-center items-center" :name="2">
            <div class="matches col-7">
              <div class="row justify-between items-around full-height">
                <div class="col-3">
                  <div class="gerb"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">Барселона</div>
                    </div>
                  </div>
                </div>
                <div class="col-5 row items-start">
                  <div class="row justify-center items-center">
                    <div class="match-text">Игра начинается через</div>
                    <div class="time">09:16:14</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="gerb2"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">ПСЖ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="row justify-center items-center" :name="3">
            <div class="matches col-7">
              <div class="row justify-between items-around full-height">
                <div class="col-3">
                  <div class="gerb"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">Барселона</div>
                    </div>
                  </div>
                </div>
                <div class="col-5 row items-start">
                  <div class="row justify-center items-center">
                    <div class="match-text">Игра начинается через</div>
                    <div class="time">09:16:14</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="gerb2"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">ПСЖ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide class="row justify-center items-center" :name="4">
            <div class="matches col-7">
              <div class="row justify-between items-around">
                <div class="col-3">
                  <div class="gerb"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">Барселона</div>
                    </div>
                  </div>
                </div>
                <div class="col-5 row items-start">
                  <div class="row justify-center items-center">
                    <div class="match-text">Игра начинается через</div>
                    <div class="time">09:16:14</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="gerb2"></div>
                  <div class="name col-12">
                    <div class="row justify-center">
                      <div class="text-h4">ПСЖ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div></q-carousel-slide
          >
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
    };
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  background: inherit;
}
.content {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.content2 {
  height: 100%;
}
.gerb {
  background-image: url("../../public/gerbs/barselona.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 188px;
  height: 204px;
}
.gerb2 {
  background-image: url("../../public/gerbs/psg.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 206px;
  height: 206px;
}
.stadion {
  background-image: url("../../public/index/stadium.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  /* height: 100%; */
}
.time {
  font-size: 66px;
  line-height: 76px;
  letter-spacing: 0.2em;

  color: #00ff29;
}
.match-text {
  color: rgba(255, 255, 255, 0.48);
}
.cont {
  background: #102135;
}
</style>
