<template>
  <div class="box">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseBox",
};
</script>

<style scoped lang="sass">
.box
  background-color: #E8E8E8
  width: 100px
  height: 100px
  justify-content: center
  align-items: center
  flex-direction: column
  display: flex
  border: 1px solid   #606060
  border-radius: 7px
</style>
