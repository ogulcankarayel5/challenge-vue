<template>
  <base-card class="card">
    <base-box>
      <base-text :text="'6'" :size="'large'" bold />
      <base-text :text="'POINTS'" :color="'	#909090'" />
    </base-box>
    <div class="card-info">
      <div>
        <base-text :text="'Hacker News'" bold />
        <base-text
          :color="'#A9A9A9'"
          :text="'(https://stackoverflow.com)'"
          :size="'small'"
        />
      </div>
      <div class="card-buttons">
        <base-button>Up Vote</base-button>
        <base-button>Down Vote</base-button>
      </div>
    </div>
  </base-card>
</template>

<script>
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
};
</script>

<style computed lang="sass">
.card
  &:hover
    background-color: #F5F5F5
  &-info
    display: flex
    flex: 1
    margin-left: 15px
    flex-direction: column
    justify-content: space-between
    &-buttons
      display: flex
      justify-content: space-between
</style>
