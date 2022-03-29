<template>
  <div class="foot-main row justify-between" style="width: 100vw">
    <div class="col-6">
      <div class="row justify-end q-mt-xl">
        <div class="item1 col-2 q-mr-lg">
          <div class="col-6 row-justify-center">Прогнозы Игры Новости</div>
        </div>
        <div class="item1 col-2 q-mr-xl">
          <div class="col-6 row-justify-center">
            О нас Оплата Статистика матчей
          </div>
        </div>
        <div class="item2 col-2 q-ml-xs">
          <div class="col-6 row-justify-center">
            Регистрация Отзывы Контакты
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="row justify-center">
        <div class="col-6 column">
          <div class="row justify-center q-mb-md">Мы в соц. сетях</div>
          <div class="row justify-around items-center">
            <div class="row justify-center">
              <div class="phone"></div>
            </div>
            <div class="line"></div>
            <div class="row justify-center">
              <div class="facebook"></div>
            </div>
            <div class="line"></div>
            <div class="row justify-center">
              <div class="telegram"></div>
            </div>
            <div class="line"></div>
            <div class="row justify-center">
              <div class="watsapp"></div>
            </div>
            <div class="line"></div>
            <div class="row justify-center">
              <div class="instagram"></div>
            </div>
            <div class="line"></div>
            <div class="row justify-center">
              <div class="viber"></div>
            </div>
            <div class="line"></div>
          </div>
          <div class="row justify-center q-mb-md q-mt-lg">
            Платежные системы
          </div>
          <div class="cards row justify-around items-center">
            <div class="item paypal col-4"></div>
            <div class="line"></div>
            <div class="item visa col-4"></div>
            <div class="line"></div>
            <div class="master col-4"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot-main {
  background: #273342;
  position: relative;
  height: 235px;
}
.image {
  background-image: url("../../public/footer/footBet.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 450px;
  height: 300px;
  position: absolute;
  top: -65px;
}
.item1 {
  border-right: 1px solid #d10a52;
}
.phone {
  background-image: url("../../public/headerImage/phone.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 24px;
  height: 24px;
}
.facebook {
  background-image: url("../../public/headerImage/facebook.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 15px;
  height: 27px;
}
.telegram {
  background-image: url("../../public/headerImage/telegram.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 25px;
}
.watsapp {
  background-image: url("../../public/headerImage/Watssap.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 29px;
}
.instagram {
  background-image: url("../../public/headerImage/instagram.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 31px;
  height: 30px;
}
.viber {
  background-image: url("../../public/headerImage/viber.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 38px;
}
.line {
  /* width: 48px; */
  height: 40px;
  border: 1px solid #d10a52;
  margin-top: 7px;
  margin-bottom: 7px;
}

.paypal {
  background-image: url("../../public/footer/paypal.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 147px;
  height: 37px;
}
.visa {
  background-image: url("../../public/footer/visa.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 104px;
  height: 30px;
}
.master {
  background-image: url("../../public/footer/master.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 69px;
  height: 41px;
}
</style>
