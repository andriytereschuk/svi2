<template>
  <nuxt-link class="banner-small" to="/">
    <span class="ban-img">
      <img
        src="https://a.storyblok.com/f/153450/1486x552/c4bc801d6d/svilake-banner-2.png"
        alt=""
      />
    </span>
    Житло на літо - Світязь
  </nuxt-link>
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

<style lang="scss" scoped>
.banner-small {
  display: flex;
  background-color: #fff;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #c22f46;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.ban-img {
  margin-right: 15px;
  width: 161px;
  background-color: #ccc;

  img {
    height: 60px;
  }
}
</style>
