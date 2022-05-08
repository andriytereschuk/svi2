<template>
  <div class="container">
    <h1>Житло</h1>
    <ul>
      <li v-for="(category, index) of items" :key="index">
        <nuxt-link :to="`homes/${category.link}`">
          <h2>{{ category.name }}</h2>
          <span v-if="minPrices[category.link]"
            >від {{ minPrices[category.link] }} грн</span
          >
          <img :src="category.image.filename" alt="" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
    title:
      'Кімнати і літні будиночки з хорошими умовами, які можна зняти в Шацьку в селі Світязь',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'На сайті SVILAKE можна знайти літні будиночки і кімнати з різнимим умовами і зручностями, переглянути фотографії і які підійдуть для різних верств населення.',
      },
      {
        name: 'keywords',
        content:
          'кімнати,будиночки,деревяні,літній,хорші,умови,світязь,свитязь,шацк,озеро,шацьк',
      },
      {
        property: 'og:url',
        content: 'http://svilake.com/homes',
      },
    ],
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
    items() {
      return this.categories.map(({ name, content }) => ({
        link: name,
        ...content,
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
