<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-inner">
      <header class="modal-header">
        <base-text :color="'#fff'" :text="title" />
        <base-button class="modal-closeButton" @onClick="closeModal(name)"
          >X</base-button
        >
      </header>

      <section class="modal-body">
        <slot name="body"></slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
import BaseText from "../components/BaseText.vue";
import BaseButton from "../components/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BaseModal",
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters("ui", ["activeModal"]),
    isOpen() {
      console.log(this.activeModal);
      return this.activeModal?.includes(this.name);
    },
  },
  methods: {
    ...mapActions("ui", ["closeModal"]),
    // toggle() {
    //   this.$emit("toggleModal");
    // },
  },
  beforeUnmount() {
    if (this.isOpen) this.closeModal();
  },
  components: {
    BaseText,
    BaseButton,
  },
};
</script>

<style scoped lang="sass">
.modal
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 10
    background-color: rgba(0, 0, 0, 0.3)
    display: flex
    justify-content: center
    align-items: center
    &-header
        height: 40px
        background-color: #000
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0 10px
    &-closeButton
        color: #fff
    &-body
        padding: 30px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    &-inner
        min-width: 40rem
        min-height: 20rem
        background: #FFFFFF
        box-shadow: 2px 2px 20px 1px
        overflow-x: auto
        display: flex
        flex-direction: column
    &-footer
        display: flex
        justify-content: space-evenly
</style>
