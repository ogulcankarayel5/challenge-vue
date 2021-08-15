<template>
  <div class="add">
    <div class="add-inner">
      <base-button @onClick="backToHome">
        <base-text :text="'Return to List'" :size="'small'"
      /></base-button>
      <base-text :text="'Add New Link'" bold :size="'large'" />
      <form @submit.prevent="" class="add-form">
        <base-input
          :label="'Link Name:'"
          type="text"
          placeholder="e.g Alphabet1"
          v-model="name"
        /><base-input
          :label="'Link URL:'"
          type="text"
          placeholder="e.g http://abc.xyz"
          v-model="url"
        />
        <div class="add-buttonWrapper">
          <base-button
            @onClick="addItemToList"
            class="add-button"
            :variant="'primary'"
            ><base-text :text="'ADD'" bold
          /></base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import BaseText from "../components/BaseText.vue";
import BaseInput from "../components/BaseInput.vue";
import { mapActions } from "vuex";

export default {
  name: "AddItem",
  components: { BaseButton, BaseText, BaseInput },
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    addItemToList() {
      const item = { name: this.name, url: this.url };
      this.addItem(item);
      this.$router.push("/");
    },
    backToHome() {
      this.$router.back();
    },
  },
};
</script>

<style lang="sass" scoped>
.add
  margin-top: 50px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &-form
    margin-top: 50px
  &-group
    display: flex
    flex-direction: column
  &-buttonWrapper
    text-align: right
  &-button
    margin-top: 30px
  input
    border: 1px solid #000
    border-radius: 2px
</style>