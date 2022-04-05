<template>
  <div class="main">
    <div class="title text-h4 row justify-center">Матчи</div>
    <div class="row justify-center">
      <div class="col-8 col-md-5">
        <div class="row justify-between">
          <button
            class="btn cursor-pointer"
            v-for="(item, i) in btnName"
            :key="item"
            @click="(activeIndex = i), (bool = i)"
            :class="activeIndex == i ? 'activebtn' : ''"
          >
            <p class="text">{{ item }}</p>

            <div :class="activeIndex === i ? 'activeLine' : 'line'"></div>
          </button>
        </div>
      </div>
    </div>
    <div v-if="bool == 0">
      <matches-compo />
      <div class="col-12">
        <div class="row justify-center">
          <div
            class="col-10 bg-black q-mt-lg items"
            v-for="(divs, i) in matches"
            :key="divs"
            style="height: 50px"
          >
            <div class="erkir">{{ divs.erkir }}</div>
            <div class="row justify-around full-height">
              <div class="col-2 col-md-3">
                <div
                  class="full-height row time-div justify-center items-center"
                  :class="index == i ? 'activeTime' : 'pasive'"
                >
                  {{ divs.time }}
                </div>
              </div>
              <div class="col-8 col-md-5">
                <div class="row justify-between">
                  <div class="col-4">
                    <div class="row justify-between">
                      <div class="col-12 col-md-7 row items-center">
                        {{ divs.name1 }}
                      </div>
                      <div class="col-5">
                        <img class="img" :src="divs.gerb1" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <div
                      class="hashiv row full-height items-center justify-center"
                    >
                      {{ divs.hashiv }}
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="row justify-between">
                      <div class="col-12 col-md-5 row items-center">
                        <img class="img" :src="divs.gerb2" alt="" />
                      </div>
                      <div class="col-7 row items-center justify-center">
                        {{ divs.name2 }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 col-md-3">
                <div class="full-height row justify-center items-center">
                  <button
                    class="match-btn cursor-pointer"
                    @click="btnIndex = i"
                    :disabled="i == 0"
                    :class="{
                      'active-btn': btnIndex == i,
                      'pasive-btn': i === 0,
                    }"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-lg">
        <div class="row justify-center">
          <div class="col-10 q-mb-md bg-black">
            <div class="row justify-center">
              <div class="col-6 col-md-2" style="height: 50px">
                <div class="row full-height items-center justify-around">
                  <div class="left"></div>
                  <div class="round"></div>
                  <div class="right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bool == 1">
      <rules />
    </div>
  </div>
</template>

<script>
import Rules from "./rules.vue";
import MatchesCompo from "./matches-compo.vue";
export default {
  components: { MatchesCompo, Rules },
  data() {
    return {
      activeIndex: 0,
      index: 0,
      btnIndex: 1,
      bool: 0,
      btnName: ["Матчи дня", "Правила игры"],
      matches: [
        {
          name1: "Атлетико",
          name2: "Атлетик",
          erkir: "Испания",
          gerb1: "gerbs/atletiko-madrid.svg",
          gerb2: "gerbs/atletik-Bilbao.svg",
          hashiv: "2 : 1",
          time: "20:00  начался",
        },
        {
          name1: "Барселона",
          name2: "ПСЖ",
          erkir: "Испания",
          gerb1: "gerbs/barselona.svg",
          gerb2: "gerbs/psg.svg",
          hashiv: " - ",
          time: "21:10   не начался",
        },

        {
          name1: "Марсель",
          name2: "Ренн",
          erkir: "Испания",
          gerb1: "gerbs/marsel.svg",
          gerb2: "gerbs/Renn.svg",
          hashiv: " - ",
          time: "22:20   не начался",
        },
        {
          name1: "Ливерпул",
          name2: " RB",
          erkir: "Испания",
          gerb1: "gerbs/liverpul.svg",
          gerb2: "gerbs/RB.svg",
          hashiv: " - ",
          time: "23:30   не начался",
        },
      ],
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
  height: 100%;
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
  height: 100%;
  left: 10px;
  top: -1px;
  border: 1px solid #102135;
}
.activebtn {
  height: 100%;
  position: relative;
  margin-right: 40px;
  background: linear-gradient(
    80.04deg,
    #d10a52 1.6%,
    rgba(5, 5, 11, 0) 106.17%
  );
}
.items {
  position: relative;
}
.erkir {
  position: absolute;
  top: -20px;
  left: 50%;
  font-size: 19px;
}
.activeTime {
  color: #ffffff;
}
.pasive {
  color: rgba(255, 255, 255, 0.35);
}
.match-btn {
  width: 102px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  background: unset;
  font-size: 14px;
  color: #ffffff;
}
.pasive-btn {
  color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.35);
  border: unset;
}
.active-btn {
  background: #a10b45;
  border: unset;
}
.hashiv {
  color: #0bbe28;
  font-size: 46px;
  line-height: 53px;
  letter-spacing: 0.05em;
}
.round {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a10b45;
}
.left {
  background-image: url("../../public/index/left.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 34px;
  height: 30px;
}
.right {
  background-image: url("../../public/index/right.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 34px;
  height: 30px;
}

@media all and (max-width: 500px) {
  .btn {
    width: 93px;
    height: 30px;
  }
  .text {
    font-size: 12px;
    padding: 0;
  }
  .line {
    left: 1px;
  }
  .activeLine {
    left: 1px;
  }
  .img {
    width: 25px;
    height: 25px;
  }
  .time-div {
    height: unset !important;
  }
  .hashiv {
    font-size: 16px;
  }
  .img {
    width: 28px;

    height: 28px;
  }
  .erkir {
    left: 40%;
  }
}
</style>
