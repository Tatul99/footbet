<template>
  <div class="col-12 q-mt-xl">
    <div class="container">
      <div class="header row justify-end">
        <div class="col-7">
          <div class="row justify-start">
            <div class="col-10">
              <div class="row justify-start">
                <div class="col-10">
                  <div class="row justify-around">
                    <div class="tabs row justify-start">прогноз</div>
                    <div class="tabs row justify-start">тип</div>
                    <div class="tabs row justify-start">дата</div>
                    <div class="tabs row justify-start">время</div>
                    <div class="tabs row justify-start">коэф.</div>
                    <div class="tabs row justify-start">цена</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="matches-container col-12">
        <div
          class="col-12 q-mb-md items"
          v-for="(item, i) in matchesArr"
          :key="item"
        >
          <div class="row justify-around items-center">
            <div class="col-5">
              <div class="row justify-between items-center">
                <div class="num">{{ i + 1 }}.</div>
                <div class="name1">{{ item.name1 }}</div>
                <img :src="item.image1" alt="" class="image1" />
                <div>VS.</div>
                <img :src="item.image2" alt="" class="image2" />
                <div class="name2">{{ item.name2 }}</div>
              </div>
            </div>
            <div class="pragnoz row items-center" v-if="active === i">
              <p>тб 1,5 / коеф 3,5</p>
            </div>
            <div class="col-5">
              <div class="row justify-between items-center">
                <div class="col-9">
                  <div class="row justify-between texts">
                    <div class="type">{{ item.type }}</div>
                    <div class="date">{{ item.date }}</div>
                    <div class="time">{{ item.time }}</div>
                    <div class="factor">{{ item.factor }}</div>
                    <div class="prise">{{ item.prise }}</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="foo(i)"
              :class="
                active === i ? 'active cursor-pointer' : 'btn cursor-pointer'
              "
            >
              <p class="btn-text">Купить</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.obj = this.matchesArr[0];
    this.$emit("infoObj", this.obj);
  },
  data() {
    return {
      active: 0,
      obj: {
        name1: "",
        name2: "",
        type: "",
        date: "",
        prise: "",
        factor: "",
        time: "",
        image1: "",
        image2: "",
      },
      matchesArr: [
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
        {
          name1: "Атлетико",
          name2: "Атлетик",
          type: "Ординар",
          date: "14.01",
          time: "22:30",
          factor: "1.67",
          prise: "1500 руб.",
          image1: "./gerbs/atletiko-madrid.svg",
          image2: "./gerbs/atletik-Bilbao.svg",
        },
      ],
    };
  },
  methods: {
    foo(i) {
      this.active = i;
      this.obj.image1 = this.matchesArr[this.active].image1;
      this.obj.image1 = this.matchesArr[this.active].image2;
      this.obj.name1 = this.matchesArr[this.active].name1;
      this.obj.name2 = this.matchesArr[this.active].name2;
      this.obj.prise = this.matchesArr[this.active].prise;
      this.obj.factor = this.matchesArr[this.active].factor;
      this.obj.date = this.matchesArr[this.active].date;
      this.obj.time = this.matchesArr[this.active].time;
      this.$emit("infoObj", this.obj);
      console.log(i);
    },
  },
};
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.26);
}
.tabs {
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.1em;
  font-variant: small-caps;

  color: rgba(0, 0, 0, 0.48);
}
.matches-container {
  height: 500px;
  background: #1b1a30;
  overflow: auto;
}
.items {
  background: rgba(255, 255, 255, 0.09);
}
.pragnoz {
  background: #9e094a;
  height: 32px;
}
p {
  margin: 0;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
}
.factor {
  background: rgba(27, 26, 48, 0.56);
  border-radius: 6px;
}
.texts {
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #d5d5d5;
}
.btn-text {
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;

  color: #ffffff;
}
.btn {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  background: inherit;
}
.active {
  background: #8e0b40;
  border-radius: 8px;
  border: unset;
}
</style>
