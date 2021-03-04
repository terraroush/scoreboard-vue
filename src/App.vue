<template>
  <div id="app">
    <matchup-title :teamA="team1" :teamB="team2"></matchup-title>
  </div>
</template>

<script>
import MatchupTitle from './components/MatchupTitle.vue';

export default {
  
  components: {MatchupTitle},
  data() {
    return {
      team1: {
        name: "Team 1",
        score: 0
      },
      team2: {
        name: "Team 2",
        score: 0
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
