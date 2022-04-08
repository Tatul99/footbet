<template>
  <div class="col-12 q-mb-xl">
    <div class="row justify-center">
      <div class="col-10">
        <!-- <div class="row justify-center">Hello predictions page</div> -->
        <predictions-payments />
      </div>
    </div>
  </div>
</template>

<script>
import PredictionsPayments from "../predictionsComponent/predictionsPayments.vue";
export default {
  components: { PredictionsPayments },
};
</script>

<style></style>
