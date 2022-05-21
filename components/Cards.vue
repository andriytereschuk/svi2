<template>
  <ul class="cards">
    <li v-for="(card, index) of cards" :key="index">
      <Card :card="card"></Card>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '. . . .';
  column-gap: 10px;
}

@media all and (-ms-high-contrast: none) {
  .cards {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows: 1fr;
  }
}
</style>
