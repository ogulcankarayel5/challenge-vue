<template>
  <base-card class="card">
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
export default {
  name: "CardItem",
  components: {
    BaseBox,
    BaseButton,
    BaseCard,
    BaseText,
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
  methods: {
    ...mapActions(["upVote","downVote"]),
    up() {
      this.upVote(this.itemId);
    },
    down() {
      this.downVote(this.itemId)
    }
  },
};
</script>

<style computed lang="sass">
.card
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
  &:hover
    background-color: #F5F5F5
  
</style>
