<template>
  <div class="container">
    <h1>Житло</h1>

    <section class="filter">
      <label>
        <input v-model="filter" type="radio" value="homes" />
        <span>Будинки</span>
      </label>

      <label>
        <input v-model="filter" type="radio" value="rooms" />
        <span>Кімнати</span>
      </label>
    </section>

    <div class="categories" :class="{ 'rooms-first': isRoomsFirst }">
      <section id="homes">
        <h2>Будинки</h2>
        <Cards :cards="homesCards" />
      </section>

      <section id="rooms">
        <h2>Кімнати по категоріям</h2>
        <Cards :cards="roomsCards" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    filter: 'homes',
  }),
  fetch({ store, app }) {
    return Promise.all([
      store.state.categories.categories.length
        ? Promise.resolve()
        : store.dispatch('categories/fetchCategories', app),
      store.state.rooms.rooms.length
        ? Promise.resolve()
        : store.dispatch('rooms/fetchRooms', app),
      store.state.homes.homes.length
        ? Promise.resolve()
        : store.dispatch('homes/fetchHomes', app),
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
    ...mapState('homes', ['homes']),
    ...mapState('categories', ['categories']),
    ...mapState('rooms', ['rooms']),
    isRoomsFirst() {
      return this.filter === 'rooms'
    },
    homesCards() {
      return this.homes.map(({ name, content }) => ({
        link: {
          name: 'homes-home',
          params: {
            home: name,
          },
        },
        title: content.title,
        info: content.info,
        image: content.mainImage.filename,
      }))
    },
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
    roomsCards() {
      return this.categories.map(({ name: category, content }) => ({
        link: {
          name: 'categories-category',
          params: {
            category,
          },
        },
        title: content.name,
        image: content.image.filename,
        price: this.minPrices[category]
          ? `від ${this.minPrices[category]} грн`
          : '',
      }))
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
}

.rooms-first {
  flex-direction: column-reverse;
}

section {
  margin-bottom: 30px;
}
</style>
