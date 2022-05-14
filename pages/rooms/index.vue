<template>
  <div class="container">
    <h1>Житло</h1>

    <section class="filter">
      <label>
        <nuxt-link to="homes">Будинки</nuxt-link>
        <input v-model="filter" type="radio" value="homes" />
        <span>Будинки</span>
      </label>

      <label>
        <input v-model="filter" type="radio" value="rooms" />
        <span>Кімнати</span>
      </label>
    </section>

    <template v-for="(card, index) of cards">
      <Card :key="index" :card="card"></Card>
    </template>
    <!-- <ul>
      <li v-for="(category, index) of cards" :key="index">
        <nuxt-link
          :to="{
            name: 'homes-id',
            params: { id: category.link },
          }"
        >
          <h2>{{ category.name }}</h2>
          <span v-if="minPrices[category.link]"
            >від {{ minPrices[category.link] }} грн</span
          >
          <img :src="category.image.filename" alt="" />
        </nuxt-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    filter: 'rooms',
  }),
  fetch({ store, app }) {
    return Promise.all([
      store.state.categories.categories.length
        ? Promise.resolve()
        : store.dispatch('categories/fetchCategories', app),
      store.state.rooms.rooms.length
        ? Promise.resolve()
        : store.dispatch('rooms/fetchRooms', app),
    ])
  },
  head: {
    title: 'Категорії кімнат',
    meta: [],
  },
  computed: {
    ...mapState('categories', ['categories']),
    ...mapState('rooms', ['rooms']),
    minPrices() {
      return this.rooms.reduce((acc, { category, price }) => {
        const link = category.cached_url.split('/')[1]

        if (acc[link]) {
          acc[link] = Math.min(acc[link], price)
        } else {
          acc[link] = price
        }

        return acc
      }, {})
    },
    cards() {
      return this.categories.map(({ name: category, content }) => ({
        link: {
          name: 'rooms-category',
          params: {
            category,
          },
        },
        title: content.name,
        image: content.image.filename,
        price: `від ${this.minPrices[category]} грн`,
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
