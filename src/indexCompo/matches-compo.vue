<template>
  <div class="col-10">
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
          <div class="col-6">{{ Yesterday }}{{ today }}</div>
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
    console.log(format(addDays(new Date(), -1), "dd MM yyyy"));
  },
  data() {
    return {
      Yesterday: format(addDays(new Date(), -1), "dd MM yyyy"),
      today: format(new Date(), "dd MM yyyy"),
      Tomorrow: format(addDays(new Date(), 1), "dd MM yyyy"),
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
</style>
