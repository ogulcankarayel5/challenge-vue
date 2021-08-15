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
    <div v-if="items">
      <div v-for="item in allItems" :key="item.id">
        <card-item :url="item.url" :name="item.name" :points="item.points" />
      </div>
    </div>
    <div v-else>
      <p>Lütfen ekleme yapınız</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseBox from "@/components/BaseBox.vue";
import CardItem from "../components/CardItem.vue";
import BaseCard from "../components/BaseCard.vue";
import BaseText from "../components/BaseText.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    navigateToAddItem() {
      this.$router.push({ name: "Add" });
    },
    ...mapActions(["setList"]),
  },
  components: {
    BaseBox,
    CardItem,
    BaseCard,
    BaseText,
  },
  computed: {
    ...mapGetters(["allItems"]),
    items() {
      console.log(this.allItems);
      return this.allItems.length > 0;
    },
  },
  mounted() {
    this.setList();
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
