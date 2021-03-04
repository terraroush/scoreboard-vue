<template>
<div>
  <p v-if="gameIsTied">The game is tied</p>
  <p v-else>{{gameLeaderDisplay}}</p>
</div>
</template>

<script>
export default {
 props: {teamA: Object, teamB: Object},
 computed: {
     gameIsTied() {
      return this.$props.teamA.score === this.$props.teamB.score;
    },
     gameLeaderDisplay() {
        const { teamA, teamB } = this.$props;
            const leadingTeam = teamA.score > teamB.score ? teamA : teamB;
            const lead = Math.abs(teamA.score - teamB.score);
            const points = lead === 1 ? "point" : "points";
            return `${leadingTeam.name} is leading by ${lead} ${points}`;
     }
 }
}
</script>

<style>

</style>