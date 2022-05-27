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
@import '~/assets/scss/vars.scss';

.cards {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;

  @media #{$xsmall} {
    margin-left: 0;
  }

  li {
    flex-basis: 25%;
    margin-bottom: 20px;
    padding-left: 10px;

    @media #{$medium} {
      flex-basis: 33%;
    }

    @media #{$small} {
      flex-basis: 50%;
    }

    @media #{$xsmall} {
      flex-basis: 100%;
      padding-left: 0;
    }
  }
}
</style>
