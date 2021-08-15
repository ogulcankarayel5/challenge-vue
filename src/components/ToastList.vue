<template>
  <base-toast v-for="toast in toasts" :key="toast.id" :toast="toast" />
</template>

<script>
import { mapGetters } from "vuex";
import BaseToast from "./BaseToast.vue";
export default {
  components: { BaseToast },
  name: "ToastList",
  computed: {
    ...mapGetters("ui", ["toasts"]),
  },
};
</script>

<style></style>
