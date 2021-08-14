<template>
  <div class="home">
    <base-button @onClick="clickButton">bas</base-button>
    <p>qwewqee</p>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Home",
  methods: {
    clickButton() {
      console.log("button");
    },
  },
  components: {
    BaseButton,
  },
};
</script>
