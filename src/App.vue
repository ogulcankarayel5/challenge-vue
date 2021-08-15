<template>
  <div id="app">
    <v-header />
    <toast-list />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import ToastList from "./components/ToastList.vue";
export default {
  name: "App",
  components: {
    "v-header": Header,
    ToastList,
  },
};
</script>
