<template>
  <div class="container">
    <h1>Житло</h1>

    <section class="filter">
      <label>
        <input v-model="filter" type="radio" value="homes" />
        <span>Будинки</span>
      </label>

      <label>
        <nuxt-link to="rooms">Кімнати</nuxt-link>
        <input v-model="filter" type="radio" value="rooms" />
        <span>Кімнати</span>
      </label>
    </section>

    <Cards :cards="cards" />
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
    cards() {
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
  },
}
</script>

<style lang="scss" scoped></style>
