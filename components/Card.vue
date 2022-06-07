<template>
  <nuxt-link :to="card.link" class="card">
    <div class="card-goto">перейти</div>
    <div class="card-img" :style="style"></div>
    <div class="card-desc">
      <div>
        <div class="card-title">{{ card.title }}</div>
        <div v-if="card.info" class="card-info">{{ card.info }}</div>
      </div>
      <div>
        <div v-if="card.price" class="card-price">{{ card.price }}</div>
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
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 2px 10px 2px rgb(0 0 0 / 25%);
  }

  &-goto {
    position: absolute;
    top: 9px;
    right: 8px;
    background-color: #fff;
    color: #000;
    padding: 4px 6px 2px 6px;
    font-size: 10px;
    line-height: 10px;
    border-radius: 4px;
    z-index: 2;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.04em;
    box-shadow: 0 1px 3px 0px rgb(0 0 0 / 25%);
    display: none;

    @media #{$small} {
      display: block;
    }
  }

  &-desc {
    height: 60px;
    padding: 0 10px;
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
    color: #fff;
    padding: 2px 5px;
    background-color: $red;
  }
}
</style>
