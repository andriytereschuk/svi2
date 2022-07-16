<template>
  <section class="box popular">
    <h2>{{ data.title }}</h2>

    <ul class="t-places">
      <li v-for="(item, index) of data.items" :key="index">
        <div class="t-place-img">
          <img
            :src="'https://a.storyblok.com/f/153450/' + getImagePath(item)"
            loading="lazy"
            height="230"
            alt=""
          />
        </div>
        <h3>{{ data.current }} - {{ item }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import Places from '@/helpers/places'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getImagePath(item) {
      return Places[item]
    },
  },
}
</script>

<style lang="scss" scoped></style>
