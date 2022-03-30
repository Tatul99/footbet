<template>
  <app-header />
  <app-menu />
  <slot />
  <app-footer />
</template>

<script>
import AppHeader from "../components/app-header.vue";
import AppMenu from "../components/app-menu.vue";
import AppFooter from "../components/app-footer.vue";
export default {
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
  },
};
</script>
