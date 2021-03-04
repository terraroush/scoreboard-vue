<template>
  <div id="app">
    <matchup-title :teamA="team1" :teamB="team2"></matchup-title>
    <game-status :teamA="team1" :teamB="team2"></game-status>
    <div>
      <score-card :score="team1.score" @addPoint="updateTeamScore(team1, 1)" @subPoint="updateTeamScore(team1, -1)"></score-card>
      <score-card :score="team2.score" @addPoint="updateTeamScore(team2, 1)" @subPoint="updateTeamScore(team2, -1)"></score-card>
    </div>
  </div>
</template>

<script>
import MatchupTitle from './components/MatchupTitle.vue';
import ScoreCard from './components/ScoreCard.vue';
import GameStatus from './components/GameStatus.vue';

export default {
  components: {MatchupTitle, ScoreCard, GameStatus},
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
  },
  methods: {
   updateTeamScore(team, points) {
     const updated = team.score + points;

     if (updated >= 0) {
       team.score = updated;
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
