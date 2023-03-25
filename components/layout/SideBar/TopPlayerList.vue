<template>
<va-list>
    <va-list-label> Top Players </va-list-label>

    <va-list-item
      v-for="(player, index) in playerList"
      :key="index"
      class="list__item"
      to="/"
    >
      <va-list-item-section icon>
          <h2 style="width: 10px;">{{ index+1 }}</h2>
      </va-list-item-section>

      <va-list-item-section avatar>
        <va-avatar>
          <img :src="player.img">
        </va-avatar>
      </va-list-item-section>

      <va-list-item-section>
        <va-list-item-label>
          {{ player.name }}
        </va-list-item-label>

        <va-list-item-label caption>
          {{ player.rating }}
        </va-list-item-label>
      </va-list-item-section>
    </va-list-item>
  </va-list>
</template>

<script setup>
      const playerList = ref([
        {
          name: "M J P",
          rating: "1.44",
          img: "https://cdn0.gamesports.net/league_team_logos/78000/78750.jpg?1675511989",
        },
        {
          name: "Ann3",
          rating: "1.23",
          img: "https://cdn0.gamesports.net/league_team_logos/78000/78750.jpg?1675511989",
        },
        {
          name: "kennyS",
          rating: "1.2",
          img: "https://cdn0.gamesports.net/league_team_logos/78000/78750.jpg?1675511989",
        },
        {
          name: "S1mple",
          rating: "1.19",
          img: "https://cdn0.gamesports.net/league_team_logos/78000/78750.jpg?1675511989",
        },
        {
          name: "MaZe",
          rating: "1.12",
          img: "https://cdn0.gamesports.net/league_team_logos/78000/78750.jpg?1675511989",
        },
      ])
</script>

<style lang="scss">
.list__item {
  padding-bottom: 5px;
  padding-top: 5px;
  &:hover {
    background-color: var(--va-focus);
  }
}
</style>