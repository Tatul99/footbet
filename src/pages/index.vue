<template>
  <slider />
  <matches />
  <forecast />
</template>

<script>
import Slider from "../indexCompo/slider.vue";
import Matches from "../indexCompo/matches.vue";
import Forecast from "../indexCompo/forecast.vue";
export default {
  components: {
    Slider,
    Matches,
    Forecast,
  },
};
</script>
