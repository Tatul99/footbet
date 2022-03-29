<template>
  <div class="col-12 row justify-between line-div">
    <!-- <div class="line"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>
    <div class="max-line"></div>
    <div class="max-line2"></div>
    <div class="max-line3"></div>
    <div class="max-line4"></div> -->
    <div
      class="line-div"
      v-for="img in arr"
      :key="img"
      style="width: 372px; height: 323px"
    >
      <div class="line"></div>
      <div class="line2"></div>
      <q-img
        class="rounded-borders col-6 col-md-2 row items-end"
        :src="img.img"
      >
        <div class=" ">
          <div class="img-text">{{ img.text }}</div>
        </div>
      </q-img>
      <div class="line3"></div>
      <div class="line4"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["arr"],
};
</script>

<style scoped>
.img {
  display: flex;
  align-items: flex-end;
}
.line-div {
  position: relative;
}
.line {
  width: 300px;
  border: 1px solid #9e094a;
  position: absolute;
  top: -10px;
  left: 10%;
}
.line2 {
  width: 200px;
  border: 1px solid #9e094a;
  position: absolute;
  top: -20px;
  left: 22%;
}
.line3 {
  width: 300px;
  border: 1px solid #9e094a;
  position: absolute;
  bottom: -10px;
  left: 10%;
}
.line4 {
  width: 200px;
  border: 1px solid #9e094a;
  position: absolute;
  bottom: -20px;
  left: 22%;
}
</style>
