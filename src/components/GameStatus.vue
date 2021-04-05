<template>
  <div>
    <p v-if="gameIsTied">The really silly game is tied</p>
    <p v-else>{{ gameLeaderDisplay }}</p>
    <div>
      <img
        v-if="gameIsTied"
        src="https://novelnovicetwilight.files.wordpress.com/2008/07/cullen-vs-black_the-debate8.jpg"
      />
      <img v-else :src="leaderPicDisplay" />
    </div>
  </div>
</template>

<script>
export default {
  props: { teamA: Object, teamB: Object },

  computed: {
    gameIsTied() {
      return this.teamA.score === this.teamB.score;
    },
    gameLeaderDisplay() {
      const leadingTeam =
        this.teamA.score > this.teamB.score ? this.teamA : this.teamB;
      const losingTeam =
        this.teamA.score > this.teamB.score ? this.teamB : this.teamA;
      const numberLead = Math.abs(this.teamA.score - this.teamB.score);
      const pointOrPoints = numberLead === 1 ? "point" : "points";
      const leadCrushOrKill =
        numberLead >= 1 && numberLead < 3
          ? "leading"
          : numberLead >= 3 && numberLead < 10
          ? "crushing"
          : "killing";
      return `${leadingTeam.name} is ${leadCrushOrKill} ${losingTeam.name} by ${numberLead} ${pointOrPoints}`;
    },
    leaderPicDisplay() {
      const leader =
        this.teamA.score > this.teamB.score ? this.teamA : this.teamB;
      return `${leader.pic}`;
    }
  }
};
</script>

<style>
img {
  width: 600px;
}
</style>
