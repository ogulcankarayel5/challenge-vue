<template>
  <div id="app">
    <v-header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
export default {
  name: "App",
  components: {
    "v-header": Header,
  },
};
</script>
