<template>
  <base-modal :title="'Remove Link'" :name="'remove'">
    <template v-slot:body>
      <base-text :color="'#000'" :text="'Do you want to remove'" />
      <base-text :color="'#000'" :text="name" bold :size="'large'" />
    </template>
    <template v-slot:footer>
      <base-button @onClick="removeItemFromList" :variant="'primary'"
        ><base-text :text="'OK'" :size="'large'" :color="'#fff'"
      /></base-button>
      <base-button @onClick="closeModal('remove')" :variant="'primary'"
        ><base-text :text="'CANCEL'" :size="'large'" :color="'#fff'"
      /></base-button>
    </template>
  </base-modal>
  <base-card
    class="card"
    @mouseover="removeButtonVisibility = true"
    @mouseleave="removeButtonVisibility = false"
  >
    <div
      @click="openModal('remove')"
      v-if="removeButtonVisibility"
      class="card-removeButton"
    >
      <p>-</p>
    </div>
    <base-box>
      <base-text :text="points.toString()" :size="'large'" bold />
      <base-text :text="'POINTS'" :color="'	#909090'" />
    </base-box>
    <div class="card-info">
      <div>
        <base-text :text="name" bold />
        <base-text :color="'#A9A9A9'" :text="url" :size="'small'" />
      </div>
      <div class="card-buttons">
        <base-button @onClick="up">Up Vote</base-button>
        <base-button @onClick="down">Down Vote</base-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import { mapActions } from "vuex";
import BaseBox from "./BaseBox.vue";
import BaseButton from "./BaseButton.vue";
import BaseCard from "./BaseCard.vue";
import BaseText from "./BaseText.vue";
import BaseModal from "./BaseModal.vue";

export default {
  name: "CardItem",
  components: {
    BaseBox,
    BaseButton,
    BaseCard,
    BaseText,
    BaseModal,
  },
  props: {
    points: {
      type: Number,
    },
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    itemId: {
      type: String,
    },
  },
  data() {
    return {
      removeButtonVisibility: false,
    };
  },
  methods: {
    ...mapActions("list", ["removeItem", "upVote", "downVote"]),
    ...mapActions("ui", ["pushToast", "openActiveModal", "closeModal"]),
    up() {
      this.upVote(this.itemId);
    },
    down() {
      this.downVote(this.itemId);
    },

    openModal(name) {
      this.openActiveModal(name);
    },
    removeItemFromList() {
      this.removeItem(this.itemId);
      this.pushToast({ type: "success", text: `${this.name} removed` });
      this.closeModal("remove");
    },
  },
};
</script>

<style computed lang="sass">
.card
  position: relative
  &-info
    display: flex
    flex: 1
    margin-left: 15px
    flex-direction: column
    justify-content: space-between
    overflow: hidden
  &-buttons
    display: flex
    justify-content: space-between
  &-removeButton
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    position: absolute
    height: 30px
    width: 30px
    background-color: red
    top: -8px
    right: -15px
    box-shadow: -1px 1px 3px black
    & p
      color: #fff
      font-size: 4rem
      margin-bottom: 8px
  &:hover
    background-color: #F5F5F5
</style>
