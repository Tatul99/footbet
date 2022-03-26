<template>
  <div>
    <app-header />
    <app-menu />
    <slot />
  </div>
</template>

<script>
import AppHeader from "../components/app-header.vue";
import AppMenu from "../components/app-menu.vue";
export default {
  components: {
    AppHeader,
    AppMenu,
  },
};
</script>
