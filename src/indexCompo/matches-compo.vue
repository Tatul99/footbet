<template>
  <div class="col-10 q-mt-md">
    <div class="row justify-center">
      <div class="col-10 content">
        <div class="row justify-center container" style="height: 100px">
          <div class="mini-title q-mt-md">Результаты</div>
          <div class="col-12">
            <div class="row justify-between"></div>
          </div>
          <div class="calendar"></div>
        </div>
        <div class="row justify-center" style="height: 50px">
          <div class="col-6">
            <div class="row justify-around">
              <div class="col-12">
                <div class="row justify-around">
                  <div
                    class="col-3 row justify-center cursor-pointer"
                    v-for="(item, i) in arr"
                    :key="item"
                    @click="activeIndex = i"
                  >
                    <div
                      class="col-12 row justify-center items"
                      :class="activeIndex == i ? 'active' : ''"
                    >
                      {{ item.text }}
                    </div>
                    <div class="col-12 row justify-center date">
                      {{ item.date }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  format,
  addDays,
  formatDistance,
  formatRelative,
  subDays,
} from "date-fns";
export default {
  mounted() {
    // let miliseconds = new Date().getTime() - 86400000;
    // let tomorrowMilis = new Date().getTime() + 86400000;
    // let yesterdaymonth = new Date(miliseconds).getMonth() + 1;
    // let yesterdayyear = new Date(miliseconds).getFullYear();
    // let yesterday = new Date(miliseconds).getDate();
    // // console.log(new Date(new Date().getTime()));
    // // console.log(new Date(miliseconds));
    // // console.log(new Date(tomorrowMilis));
    // console.log(yesterday, "0" + yesterdaymonth, yesterdayyear);
    // console.log();
  },
  data() {
    return {
      activeIndex: 1,
      Yesterday: format(addDays(new Date(), -1), "dd MM yyyy"),
      today: format(new Date(), "dd MM yyyy"),
      Tomorrow: format(addDays(new Date(), 1), "dd MM yyyy"),
      arr: [
        {
          text: "Вчера",
          date: format(addDays(new Date(), -1), "dd MM yyyy"),
        },
        {
          text: "Сегодня",
          date: format(new Date(), "dd MM yyyy"),
        },
        {
          text: "Завтра",
          date: format(addDays(new Date(), 1), "dd MM yyyy"),
        },
      ],
      time: [
        {
          day: "Вчера",
          time: "09.03.21",
        },
        {
          day: "Сегодня",
          time: "10.03.21",
        },
        {
          day: "Завтра",
          time: "11.03.21",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background: #0c0b22;
}
.mini-title {
  font-size: 29px;
  line-height: 33px;
  letter-spacing: 0.18em;
}
.container {
  position: relative;
}
.calendar {
  background-image: url("../../public/index/Calendar.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 34px;
  height: 33px;
  position: absolute;
  top: 20px;
  right: 150px;
}
.date {
  font-size: 13px;
  color: #d10a52;
}
.active {
  font-size: 29px;
  position: relative;
}
.active:after {
  position: absolute;
  content: "";
  width: 70%;
  height: 3px;
  bottom: 0px;
  right: 15%;
  background: #fff;
}
.items {
  /* padding-right: 30px; */
  border-right: 1px solid #d10a52;
}
</style>
