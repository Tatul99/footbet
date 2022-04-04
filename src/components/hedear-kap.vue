<template>
  <div class="content2 column">
    <div class="row justify-center">
      <q-btn>
        <div class="phone"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>+34 672 314 808</strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
    <div class="row justify-center">
      <q-btn>
        <div class="facebook"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong></strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
    <div class="row justify-center">
      <q-btn>
        <div class="telegram"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>+34 672 314 808</strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
    <div class="row justify-center">
      <q-btn>
        <div class="watsapp"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>+34 672 314 808</strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
    <div class="row justify-center">
      <q-btn>
        <div class="instagram"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong></strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
    <div class="row justify-center">
      <q-btn>
        <div class="viber"></div>
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>+34 672 314 808</strong>
        </q-tooltip>
      </q-btn>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content2 {
  position: absolute;
  left: -50px;
  top: 30%;
  display: flex;
  justify-content: center;
}
.phone {
  background-image: url("../../public/headerImage/phone.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 24px;
  height: 24px;
}
.facebook {
  background-image: url("../../public/headerImage/facebook.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 15px;
  height: 27px;
}
.telegram {
  background-image: url("../../public/headerImage/telegram.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 25px;
}
.watsapp {
  background-image: url("../../public/headerImage/Watssap.svg");
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
  background-image: url("../../public/headerImage/viber.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 38px;
}
.line {
  width: 48px;
  border: 1px solid #d10a52;
  margin-top: 7px;
  margin-bottom: 7px;
}
</style>
