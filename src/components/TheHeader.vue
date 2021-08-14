<template>
  <header class="header">
    <p class="rightText">hepsiburada.com</p>
    <p class="leftText">LinkVote Challenge</p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="sass" scoped>
.header

    font-size: 2rem
    margin-left: auto
    margin-right: auto
    width: 100%
    max-width: 1280px
    border-bottom: 1px solid #000
    display: flex
    justify-content: space-between

    & .rightText
        color: #FF6000
</style>
