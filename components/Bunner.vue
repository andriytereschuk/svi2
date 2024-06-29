<template>
  <div>
    <h2>Вашій увазі <strong>житло в Світязі</strong></h2>
    <Cards :cards="cards" is-vertical />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('cards', ['cards']),
  },
  mounted() {
    if (this.cards.length) return
    return this.$store.dispatch('cards/fetchCards', this.$nuxt.context.app)
  },
}
</script>

<style lang="scss" scoped></style>
