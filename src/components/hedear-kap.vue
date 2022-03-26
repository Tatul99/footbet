<template>
  <div class="content2 column">
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
  width: 48px;
  border: 1px solid #d10a52;
  margin-top: 7px;
  margin-bottom: 7px;
}
</style>
