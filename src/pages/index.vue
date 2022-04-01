<template>
  <slider />
  <matches />
  <forecast />
  <reviews />
</template>

<script>
import Slider from "../indexCompo/slider.vue";
import Matches from "../indexCompo/matches.vue";
import Forecast from "../indexCompo/forecast.vue";
import Reviews from "../indexCompo/Reviews.vue";
export default {
  components: {
    Slider,
    Matches,
    Forecast,
    Reviews,
  },
};
</script>
