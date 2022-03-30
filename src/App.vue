<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
export default {
  mounted() {},
  name: "App",
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style></style>
