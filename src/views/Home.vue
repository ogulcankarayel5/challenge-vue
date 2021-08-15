<template>
  <div class="home">
    <div class="home-inner">
      <base-card @click="navigateToAddItem" class="home-submitLink">
        <base-box> <fa icon="plus" size="4x" /></base-box>
        <base-text
          :size="'large'"
          :text="'SUBMIT A LINK'"
          class="home-submitText"
        />
      </base-card>
      <div class="home-divider" />
      <select v-model="filter">
        <option value="">Order By</option>
        <option value="most">Most Voted (Z -> A)</option>
        <option value="less">Less Voted (A -> Z)</option>
      </select>
      <div v-if="items">
        <div v-for="item in filteredList" :key="item.id">
          <card-item
            :itemId="item.id"
            :url="item.url"
            :name="item.name"
            :points="item.points"
          />
        </div>
      </div>
      <div v-else>
        <p>Lütfen ekleme yapınız</p>
      </div>
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
    ...mapActions(["getList", "saveList", "changeFilter"]),
  },
  components: {
    BaseBox,
    CardItem,
    BaseCard,
    BaseText,
  },
  computed: {
    ...mapGetters(["allItems", "filteredList"]),
    items() {
      return this.filteredList.length > 0;
    },
    filter: {
      get() {
        return this.$store.state.filterOption;
      },
      set(value) {
        this.changeFilter(value);
      },
    },
  },
  mounted() {
    this.getList();
  },
  watch: {
    filter() {},
  },
};
</script>

<style scoped lang="sass">
.home
  margin-top: 50px
  display: flex
  justify-content: center
  align-items: center
  &-inner
    display: flex
    flex-direction: column

  &-divider
    background-color: #F5F5F5
    height: 4px
    width: 440px
    margin-top: 30px
    margin-bottom: 30px
  &-submitLink
    background-color: #F5F5F5
    border-radius: 20px
    align-items: center
  &-submitText
    margin-left: 50px
    letter-spacing: 1.2px
  select
    background-color: #F5F5F5
    font-size: 1.4rem
    outline: none
    width: 15rem
    padding: 5px
    border-radius: 5px
  option
    background-color: red
</style>
