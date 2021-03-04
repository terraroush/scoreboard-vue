<template>
  <h1>{{teamA.name + ' vs ' + teamB.name}}</h1>
</template>

<script>
export default {
    props: {teamA: Object, teamB: Object}

}
</script>

<style>

</style>