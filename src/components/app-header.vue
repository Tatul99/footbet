<template>
  <div class="header row justify-end" style="width: 100vw; min-height: 50px">
    <div
      class="col-11 column justify-end"
      :class="bool ? 'content' : ''"
      style="width: 96vw"
    >
      <headear-kap class="kap" v-if="bool" />
      <div class="row justify-center content2">
        <q-btn class="menu2">
          <div class="menuitem"></div>
          <div class="menuitem"></div>
          <div class="menuitem"></div>
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item
                class="menu-container"
                v-for="item in btnName"
                :key="item"
                clickable
                v-close-popup
              >
                <q-item-section>{{ item }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu></q-btn
        >
        <div class="menu2"></div>
        <div class="football" v-if="bool"></div>
        <div class="col-12 col-md-11 q-mt-lg" :class="bool ? 'container' : ''">
          <div class="row justify-between conotent">
            <div class="footballlogo" style=""></div>
            <div class="registr-div col-8 col-md-4 q-mt-lg">
              <div class="row justify-around items-center">
                <div class="registr row">
                  <div class="icon1 q-mr-xs"></div>
                  Регистрация
                </div>
                <div class="vxod row">
                  <div class="icon2 q-mr-xs"></div>
                  Войти
                </div>
                <div class="lenguage row" style="width: 70px">
                  <q-btn class="" :label="leng[arjeq].lengKarch">
                    <img class="icon3" :src="leng[arjeq].flag" alt="" />
                    <q-menu>
                      <q-list dense style="min-width: 100px">
                        <q-item
                          class="menu-container"
                          v-for="(leng, i) in leng"
                          :key="leng"
                          clickable
                          v-close-popup
                          @click="(arjeq = i), log()"
                        >
                          <q-item-section>
                            <img class="icon3" :src="leng.flag" alt="" />
                            {{ leng.leng }}
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu></q-btn
                  >
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
    console.log(this.btnName);
  },
  data() {
    return {
      lenguageBool: false,
      bool: false,
      arjeq: 1,
      btnName: [
        "Главная",
        "Игры",
        "Статистика матчей",
        "Прогнозы/Оплата",
        "Отзывы",
        "О нас",
        "Контакты",
      ],
      leng: [
        {
          flag: "./index/Arm.svg",
          leng: "հայերեն",
          lengKarch: "հայ",
        },
        {
          flag: "./index/image6.png",
          leng: "Русский",
          lengKarch: "Рус",
        },
        {
          flag: "./index/Eng.svg",
          leng: "English",
          lengKarch: "Eng",
        },
      ],
    };
  },
  methods: {
    log() {
      console.log(this.arjeq);
    },
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
/* .content2 {
  position: relative;
} */
.menu2 {
  position: absolute;
  top: 180px;
  left: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  display: none;
}
.menuitem {
  width: 40px;
  height: 4px;
  background: #fff;
  margin-bottom: 5px;
}
.menu-container {
  background: #12112c;
  border: 1px solid #7e1a4a;
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
  .menu2 {
    display: block;
  }
  .kap {
    display: none;
  }
}
</style>
