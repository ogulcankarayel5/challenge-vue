<template>
  <div class="add">
    <div class="add-inner">
      <base-button class="add-back" @onClick="backToHome">
        <img :src="arrowLeft" class="add-backIcon" />
        <base-text :text="'Return to List'" :size="'small'"
      /></base-button>
      <base-text :text="'Add New Link'" bold :size="'large'" />
      <form @submit.prevent="" class="add-form">
        <base-input
          aria-required
          :label="'Link Name:'"
          type="text"
          placeholder="e.g Alphabet1"
          v-model="name"
        /><base-input
          aria-required
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
import arrowLeft from "../icons/arrow_left.svg";

import { mapActions } from "vuex";

export default {
  name: "AddItem",
  components: { BaseButton, BaseText, BaseInput },
  data() {
    return {
      name: "",
      url: "",
      arrowLeft,
    };
  },
  computed: {
    formIsValid() {
      return !!this.name && !!this.url;
    },
  },
  methods: {
    ...mapActions("list", ["addItem"]),
    ...mapActions("ui", ["pushToast"]),
    addItemToList() {
      if (this.formIsValid) {
        const item = { name: this.name, url: this.url };
        this.addItem(item);
        this.pushToast({ type: "success", text: `${this.name} added` });
        this.backToHome();
      } else {
        alert("Bütün alanları doldurun");
      }
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
  &-back
    display: flex
    align-items: center
  &-backIcon
    margin-right: 5px
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
