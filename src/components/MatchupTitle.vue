<template>
  <h1>
      <span :class="{winning: teamA.score > teamB.score}" >{{teamA.name}}</span>
      vs
      <span :class="{winning: teamB.score > teamA.score}" >{{teamB.name}}</span>

  </h1>
</template>

<script>
export default {
    props: {teamA: Object, teamB: Object},

}
</script>

<style>
.winning {
    color: blue;
}
</style>