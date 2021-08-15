<template>
  <component :style="styles" :is="tag" class="text" :class="textClass">{{
    text
  }}</component>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    tag: {
      type: String,
      default: "p",
    },
    text: {
      type: String,
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ["normal", "small", "large"].indexOf(value) !== -1;
      },
    },
    bold: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },
  computed: {
    textClass() {
      return {
        "text-normal": this.size === "normal",
        "text-small": this.size === "small",
        "text-large": this.size === "large",

        "text-bold": this.bold,
      };
    },
    styles() {
      return {
        color: this.color,
      };
    },
  },
};
</script>

<style scoped lang="sass">
.text
    font-weight: normal
    &-normal
        font-size: 1.5rem
    &-small
        font-size: 1rem
    &-large
        font-size: 2.5rem

    &-bold
        font-weight: bold
</style>
