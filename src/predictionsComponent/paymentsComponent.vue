<template>
  <div class="col-12 q-mt-xl main">
    <div class="row justify-center">
      <div class="col-4">
        <div class="row justify-center">
          <div class="logo-name row justify-center">
            <img :src="obj.image1" class="image" alt="" />
            <p class="col-12 row justify-center">{{ obj.name1 }}</p>
          </div>
          <div class="row items-center text-h6">VS</div>
          <div class="logo-name row justify-center">
            <img :src="obj.image2" class="image" alt="" />
            <p class="col-12 row justify-center">{{ obj.name2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-8 coef-data">
      <div>Коэффициент: {{ obj.factor }}</div>
      <div>Дата / Время начала события:{{ obj.date }}/{{ obj.time }}</div>
    </div>
    <div class="row justify-center content">
      <div class="col-8">
        <div class="row justify-center">
          <div class="prise q-mt-md q-mb-md">{{ obj.prise }}</div>
          <div class="text-h6 col-12 q-mb-md">
            <div class="row justify-center">выбрать платежную систему</div>
          </div>
          <div class="col-12">
            <div class="row justify-between q-mb-lg">
              <q-btn class="btn">
                <p class="btn-text">Банковская карта</p></q-btn
              >
              <!-- <button class="btn cursor-pointer"> -->

              <!-- </button> -->
              <img
                src="../../public/footer/paypal.png"
                class="paypal"
                alt="paypal Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <card-component />
  </div>
</template>

<script>
import CardComponent from "./card-component.vue";
export default {
  components: { CardComponent },
  props: ["obj"],
  mounted() {
    console.log(this.obj.name1);
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 60px;
}
.image {
  width: 131px;
  height: 125px;
}
.coef-data {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 190%;
  /* or 42px */

  letter-spacing: 0.19em;
  text-transform: uppercase;
}
.content {
  background: rgba(255, 255, 255, 0.06);
}
.prise {
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 0.1em;

  color: #a70b47;
}
.btn-text {
  margin: 0;
  padding: 10px 5px;
  font-size: 23px;
  line-height: 29px;
  letter-spacing: 0.12em;
  color: #fff;
}
.btn {
  background: #a70b47;
}
.paypal {
  width: 252px;
  height: 61px;
}
</style>
