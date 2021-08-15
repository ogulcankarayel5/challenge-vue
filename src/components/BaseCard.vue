<template>
  <div class="baseCard" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped lang="sass">
.baseCard
    width: 440px
    height: auto
    padding: 15px
    margin-top: 30px
    background-color: transparent
    display: flex
    justify-content: center

    cursor: pointer
</style>
