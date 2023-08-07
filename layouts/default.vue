<template>
    <div style="background-color: var(--va-background-primary);">
        <va-navbar fixed color="primary" style="flex-wrap: nowrap;">
            <template #left>
                <va-navbar-item class="logo" style="width: 217.6px;display: flex; justify-content: center;">
                    <nuxt-link
                    v-slot="navigate"
                    to="/">
                    <nuxt-img @click="navigate"
                        :src="((switchValue == 'dark') ? '../public/pictures/IconDark.png' : '../public/pictures/IconLight.png')"
                        height="50px" />
                    </nuxt-link>
                </va-navbar-item>
                <va-navbar-item>
                    <va-button plain to="match" :color="$route.name=='match'?'secondary':'#ffffff'"> Matches </va-button>
                </va-navbar-item>
                <va-navbar-item>
                    <va-button plain to="bracket" :color="$route.name=='bracket'?'secondary':'#ffffff'"> Bracket </va-button>
                </va-navbar-item>
                <va-navbar-item>
                    <va-button plain to="stats" :color="$route.name=='stats'?'secondary':'#ffffff'"> Stats </va-button>
                </va-navbar-item>
            </template>
            <template #right>
                <va-navbar-item>
                    <va-button color="#4f8be0"> Log In </va-button>
                </va-navbar-item>
                <va-navbar-item>
                    <VaSwitch v-model="switchValue" true-value="dark" false-value="light" size="small" />
                </va-navbar-item>
            </template>
        </va-navbar>
        <VaDivider style="height: 75px;" />
        <div style="display:flex;align-items: stretch;flex-direction: row;">
            <div style="flex-grow:1;">
                <div>
                    <MatchCard v-if="MatchDetails" :own="true" :details="MatchDetails" />
                </div>
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useColors } from "vuestic-ui";

const { applyPreset, currentPresetName } = useColors();

var MatchDetails = ref({
  team1: {
    name: "Team1",
    tag: "You",
    logo: "/pictures/IconDark.png"
  },
  team2: {
    name: "Team2",
    tag: "The World",
    logo: "/pictures/Iconlight.png"
  },
  startingTime: "16:00",
  round: "LB-Round2",
  type: "",
  id: "1",
})

const switchValue = computed({
    get() { return currentPresetName.value },
    set(value) { applyPreset(value) }
})

</script>

<style>
* {
    font-family: 'Ubuntu', sans-serif;
}
</style>