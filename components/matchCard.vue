<template>
  <div class="cardContainer">
    <va-card :color="ownMatch ? 'success' : 'primary'" gradient class="matchCard">
      <div style="display: flex; align-items:center; flex-grow: inherit; justify-content: center;">
        <va-card-title style="width:100px;margin-right: auto;">{{ matchDetails.round }}</va-card-title>
        <h1 class="startTime" style="width:100px; text-align: center;">{{ matchDetails.startingTime }}</h1>
        <div style="display: flex;justify-content:right;width:100px; margin-left: auto; padding: 20px;"><va-icon
            name="open_in_new" /></div>
      </div>
      <va-card-content style="padding-top:0px;display:flex;align-items: center;flex-direction: column;">
        <div style="display: flex; align-items: center;">
          <div class="teamNameContainer" style="text-align: right;">
            <h1 class="teamTag">{{ matchDetails.team1.tag }}</h1>
            <h2 class="teamName">{{ matchDetails.team1.name }}</h2>
          </div>
          <div class="teamLogoContainer"><nuxt-img :src="matchDetails.team1.logo" height="100px" class="teamLogo" /></div>
          <h1 style="font-size: 50px; margin: 25px;">VS</h1>
          <div class="teamLogoContainer"><nuxt-img :src="matchDetails.team2.logo" height="100px" class="teamLogo" /></div>
          <div class="teamNameContainer">
            <h1 class="teamTag">{{ matchDetails.team2.tag }}</h1>
            <h2 class="teamName">{{ matchDetails.team2.name }}</h2>
          </div>
        </div>
        <h1 class="timer">{{ timeToStart }}</h1>
        <div class="buttonContainer" v-if="ownMatch">
          <va-button round color="backgroundElement" size="large" class="cardButton"> Join Server </va-button>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup>
var matchDetails = ref({
  team1: {
    name: "Team1",
    tag: "T1",
    logo: "/pictures/IconDark.png"
  },
  team2: {
    name: "Team2",
    tag: "T2",
    logo: "/pictures/Iconlight.png"
  },
  startingTime: "16:00",
  round: "LB-Round2",
  type: "",
  id: "1",
})
if (details) matchDetails=details

const loadingData = null
var ownMatch = ref(false)
ownMatch = own
const {own, details} = defineProps({
  own: Boolean,
  details: Object
})
var timeToStart = ref("30m")
</script>

<style scoped lang="scss">
.cardContainer {
  margin: 10px
}

.teamLogoContainer {
  background-color: var(--va-background-element);
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
}

.teamLogo {
  border-radius: 5px;
}

.teamNameContainer {
  display: flex;
  flex-direction: column;
  text-overflow: clip;
}

.teamTag {
  font-size: 50px;
  margin-left: 25px;
  margin-right: 25px;
  width: 256px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.teamName {
  font-size: 25px;
  margin-left: 25px;
  margin-right: 25px;
  width: 256px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.startTime {
  font-size: 25px;
}

.buttonContainer {
  display: flex;
}

.cardButton {
  margin-top: 20px;
  margin-left: 72.5px;
  margin-right: 72.5px;
}

</style>