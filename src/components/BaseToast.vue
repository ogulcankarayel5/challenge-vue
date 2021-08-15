<template>
  <div class="toast" :class="typeClass" v-bind="$attrs">
    <base-text :size="'large'" :text="toast.text" bold />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseText from "./BaseText.vue";
export default {
  components: { BaseText },
  name: "BaseToast",
  props: {
    toast: {
      type: Object,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `toast-${this.toast.type}`;
    },
  },
  mounted() {
    console.log(this.toast);
    this.timeout = setTimeout(() => {
      this.removeToast(this.toast);
    }, 1000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: {
    ...mapActions("ui", ["removeToast"]),
  },
};
</script>

<style scoped lang="sass">
.toast
    position: absolute
    left: 50%
    transform: translateX(-50%)
    top: 8%
    width: 35rem
    height: 6rem
    box-shadow: 0px 1px 6px black
    display: flex
    justify-content: center
    align-items: center

    &-success
        background: #85FFAD
        & p
            color: #2B5338
</style>
