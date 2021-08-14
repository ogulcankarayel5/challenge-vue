<template>
  <component
    :is="tag"
    :href="to"
    @click="onClickButton"
    class="button"
    :class="btnClass"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    to: {
      type: String,
    },
    tag: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
      validator: (value) => {
        return ["normal", "small"].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      default: "transparent",
      validator: (value) => {
        return ["primary", "transparent"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    onClickButton() {
      this.$emit("onClick");
    },
  },
  emits: ["onClick"],
  computed: {
    btnClass() {
      return {
        "button-normal": this.size === "normal",
        "button-small": this.size === "small",

        "button-transparent": this.variant === "transparent",
        "button-primary": this.variant === "primary",
      };
    },
  },
};
</script>

<style scoped lang="sass">
.button

  &-transparent
    background-color: transparent
  &-primary
    background-color: #000
    color: #fff
  &-normal
    width: 80px
    padding: 10px 0
</style>
