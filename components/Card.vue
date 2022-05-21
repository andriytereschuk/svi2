<template>
  <nuxt-link :to="card.link" class="card">
    <div class="card-img" :style="style"></div>
    <div class="card-desc">
      <div>
        <div class="card-title">{{ card.title }}</div>
        <div v-if="card.info" class="card-info">{{ card.info }}</div>
      </div>
      <div>
        <div class="card-price">{{ card.price }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    style() {
      return {
        backgroundImage: `url("${this.card.image}")`,
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';

.card {
  display: block;
  background-color: #fff;
  box-shadow: 0 7px 12px -4px rgb(0 0 0 / 15%);
  transition: ease-in 0.2s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 2px 10px 2px rgb(0 0 0 / 25%);
  }

  &-desc {
    height: 60px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    font-size: 15px;
    font-weight: 700;
    font-family: Arial;
  }

  &-info {
    font-size: 13px;
  }

  &-img {
    padding-top: 75.07%;
    position: relative;
    background-color: $light;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &-price {
    font-weight: bold;
    font-size: 13px;
  }
}
</style>
