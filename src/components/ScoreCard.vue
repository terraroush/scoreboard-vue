<template>
  <div>
    <h1>{{ score }}</h1>
    <button @click="subPoint">-</button>
    <button @click="addPoint">+</button>
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
    }
  }
};
</script>

<style></style>
