<template>
  <component :is="tag" :href="to" @click="onClickButton" class="button">
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
  },
  methods: {
    onClickButton() {
      this.$emit("onClick");
    },
  },
  emits: ["onClick"],
};
</script>

<style>
.button {
  width: 250px;
  height: 250px;
  background-color: blue;
}
</style>
