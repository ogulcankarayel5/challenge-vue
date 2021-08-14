<template>
  <div class="home">
    <base-card @click="navigateToAddItem" class="home-submitLink">
      <base-box> <fa icon="plus" size="4x" /></base-box>
      <base-text
        :size="'large'"
        :text="'SUBMIT A LINK'"
        class="home-submitText"
      />
    </base-card>
    <card-item />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseBox from "@/components/BaseBox.vue";
import CardItem from "../components/CardItem.vue";
import BaseCard from "../components/BaseCard.vue";
import BaseText from "../components/BaseText.vue";

export default {
  name: "Home",
  methods: {
    navigateToAddItem() {
      this.$router.push({ name: "Add" });
    },
  },
  components: {
    BaseBox,
    CardItem,
    BaseCard,
    BaseText,
  },
};
</script>

<style scoped lang="sass">
.home
  margin-top: 50px
  display: flex
  flex-direction: column
  align-items: center
  &-submitLink
    background-color: #F5F5F5
    border-radius: 20px
    align-items: center
  &-submitText
    margin-left: 50px
    letter-spacing: 1.2px
</style>
