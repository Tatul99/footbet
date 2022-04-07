<template>
  <div class="q-pa-md">
    <q-carousel
      class="bg slider"
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
        v-for="(arr, i) in sliderItems"
        :key="i"
        :name="i"
        class="column no-wrap"
        style="padding: 0"
      >
        <div
          class="row fit col-12 sliders-div justify-between items-center q-col-gutter no-wrap"
        >
          <slider-image :arr="arr" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import SliderImage from "./slider-image.vue";

export default {
  components: { SliderImage },
  data() {
    return {
      width: document.documentElement.clientWidth,

      slide: 1,
      slideToShow: 4,
      imagearr: [
        {
          text: "«л1» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image1.png",
        },
        {
          text: "«Реал2» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image2.png",
        },
        {
          text: "«Реал3» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image3.png",
        },
        {
          text: "«Реал4» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image4.png",
        },
        {
          text: "«Реал5» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image1.png",
        },
        {
          text: "«Реал6» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image2.png",
        },
        {
          text: "«Реал7» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image3.png",
        },
        {
          text: "«Реал8» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image4.png",
        },
        {
          text: "«Реал9» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image1.png",
        },
        {
          text: "«Реал10» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image2.png",
        },
        {
          text: "«Реал11» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image3.png",
        },
        {
          text: "«Реал12» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image4.png",
        },
        {
          text: "«Реал13» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image1.png",
        },
        {
          text: "«Реал14» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image2.png",
        },
        {
          text: "«Р15» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image3.png",
        },
        {
          text: "«Реа16» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
          img: "./index/image4.png",
        },
      ],
    };
  },
  computed: {
    length() {
      return this.imagearr.length / 4;
    },
    sliderItems() {
      let result = [];
      let arr = [];
      for (let i = 0; i < this.imagearr.length; i++) {
        if (i === this.imagearr.length - 1 || i % this.slideToShow === 0) {
          if (arr.length > 0) {
            result.push(arr);
          }
          if (i + 1 === this.imagearr.length) {
            arr.push(this.imagearr[i]);
          }
          arr = [];
        }
        arr.push(this.imagearr[i]);
      }
      return result;
    },
  },
  mounted() {
    // console.log(this.length);
    // console.log(this.sliderItems);
    // console.log(document.documentElement.clientWidth);
    window.addEventListener("resize", this.getDimensions);
    console.log(window.innerWidth);
    if (window.innerWidth < 1597) {
      this.slideToShow = 3;
    }
    if (window.innerWidth < 1291) this.slideToShow = 2;
  },
  unmounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  methods: {
    // log(){
    //   console.log();
    // }
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      // this.height = document.documentElement.clientHeight;
      if (this.width + 15 <= 1597) this.slideToShow = 3;
      if (this.width + 15 <= 1290) this.slideToShow = 2;
      if (this.width + 15 >= 1597) this.slideToShow = 4;
      // if (this.width + 15 <= 500) this.slideToShow = 1;
    },
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

@media all and (max-width: 500px) {
  .slider {
    height: 300px !important;
  }
  .sliders-div {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
