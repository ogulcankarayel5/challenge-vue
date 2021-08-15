<template>
  <slot name="data" :paginatedItems="paginatedItems" />
  <div class="pagination" v-bind="$attrs">
    <base-button
      :disabled="pageNumber <= 1"
      @onClick="changePage(pageNumber - 1)"
      class="pagination-arrow"
      >&lt;</base-button
    >
    <span v-for="(item, index) in new Array(numberPages)" :key="index">
      <base-button
        @onClick="changePage(index + 1)"
        class="pagination-button"
        :class="[pageNumber === index + 1 ? 'pagination-button--active' : '']"
      >
        {{ index + 1 }}
      </base-button>
    </span>
    <base-button
      :disabled="pageNumber >= numberPages"
      @onClick="changePage(pageNumber + 1)"
      class="pagination-arrow"
      >&gt;</base-button
    >
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "Pagination",
  components: { BaseButton },
  data() {
    return {
      pageNumber: Number(this.$route.query.pageNumber) || 1,
      perPage: 5,
    };
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
    },
  },
  methods: {
    changePage(newNumber) {
      this.pageNumber = newNumber;
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: newNumber,
        },
      });
    },
  },
  computed: {
    numberPages() {
      return Math.ceil(this.totalItems / this.perPage);
    },
    paginatedItems() {
      let end = this.perPage * this.pageNumber;
      console.log(end, end - this.perPage);
      return this.items.slice(end - this.perPage, end);
    },
  },
};
</script>

<style scoped lang="sass">
.pagination
    display: flex
    justify-content: center
    margin-top: 20px
    &-arrow
        font-size: 2rem
    &-button
        padding: 0 8px
        margin-right: 20px
        margin-left: 20px
        font-size: 2rem
        &:disabled
            cursor: auto
        &--active

            border: 1px solid #000
</style>
