<template>
  <div id="app">
    <matchup-title :teamA="team1" :teamB="team2"></matchup-title>
    <div class="scores">
      <score-card
        class="score-card"
        :score="team1.score"
        @addPoint="updateTeamScore(team1, 1)"
        @subPoint="updateTeamScore(team1, -1)"
      ></score-card>
      <score-card
        class="score-card"
        :score="team2.score"
        @addPoint="updateTeamScore(team2, 1)"
        @subPoint="updateTeamScore(team2, -1)"
      ></score-card>
    </div>
    <game-status :teamA="team1" :teamB="team2"></game-status>
  </div>
</template>

<script>
import MatchupTitle from "./components/MatchupTitle.vue";
import ScoreCard from "./components/ScoreCard.vue";
import GameStatus from "./components/GameStatus.vue";

export default {
  components: { MatchupTitle, ScoreCard, GameStatus },
  data() {
    return {
      team1: {
        name: "Team Edward",
        score: 0,
        pic:
          "https://media.apnarm.net.au/media/images/2020/05/05/v3imagesbincf2005744468c915c4ef7bf8fa64c989-7movkwqsvd1rwtn3au2_t1880.jpg"
      },
      team2: {
        name: "Team Jacob",
        score: 0,
        pic:
          "https://openpsychometrics.org/tests/characters/test-resources/pics/T/3.jpg"
      }
    };
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
  display: flex;
  flex-direction: column;
}
.scores {
  display: flex;
  justify-content: center;
}
.score-card {
  padding: 50px;
}
</style>
