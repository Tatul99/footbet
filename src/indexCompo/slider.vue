<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-carousel
        class="bg"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        prev-icon="img:https://images.vectorhq.com/images/previews/79a/red-arrows-set-left-clip-art-102487.png"
        next-icon="img:https://thumbs.dreamstime.com/b/fat-arrow-white-197897271.jpg"
        control-color="primary"
        navigation
        padding
        arrows
        height="500px"
      >
        <q-carousel-slide
          v-for="(arr, i) in imagearr"
          :key="i"
          :name="i"
          class="column no-wrap"
        >
          <div
            class="row fit justify-between items-center q-col-gutter no-wrap"
          >
            <slider-image :arr="arr" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import SliderImage from "./slider-image.vue";
export default {
  components: { SliderImage },
  data() {
    return {
      slide: 1,
      imagearr: [
        [
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image1.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image2.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image3.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image4.png",
          },
        ],
        [
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image1.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image2.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image3.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image4.png",
          },
        ],
        [
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image1.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image2.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image3.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image4.png",
          },
        ],
        [
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image1.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image2.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image3.png",
          },
          {
            text: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
            img: "./index/image4.png",
          },
        ],
      ],
    };
  },
  computed: {
    length() {
      return this.imagearr.length / 4;
    },
  },
  mounted() {
    console.log(this.length);
  },
};
</script>

<style scoped>
.bg {
  position: relative;
  background: #151d27;
}
.img-text {
  /* height: 88px; */
  background: rgba(0, 0, 0, 0.6);
}
</style>
