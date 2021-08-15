<template>
  <div class="input">
    <label class="input-label" :for="`${label}`">{{ label }}</label>
    <input
      class="input-value"
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
      :id="`${label}`"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="sass" scoped>
.input
  margin-top: 15px
  display: flex
  flex-direction: column
  &-label
    padding-left: 15px
  &-value
    padding: 10px 10px 10px 2px
    border: 1px solid #000
    border-radius: 3px
    width: 25rem
</style>
