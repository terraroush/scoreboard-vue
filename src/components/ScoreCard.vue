<template>
  <div>
    <h1 class="score">{{ score }}</h1>
    <button class="sub-button" @click="subPoint">-</button>
    <button class="add-button" @click="addPoint">+</button>
  </div>
</template>

<script>
export default {
  props: ["score"],

  methods: {
    subPoint() {
      this.$emit("subPoint", this.score);
    },
    addPoint() {
      this.$emit("addPoint", this.score);
    },
  },
};
</script>

<style></style>
