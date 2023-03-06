<template>
  <div>
    <div class="matchListCardContainer">
      <va-card class="matchListCard">
        <va-card-title style="font-size: 25px; font-weight: 900; text-align: center;">Matches</va-card-title>
        <va-list>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </va-list>
      </va-card>
    </div>
  </div>
</template>

<style lang="scss">
.matchListCardContainer {
  margin: 10px
}
.matchListCard{
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>