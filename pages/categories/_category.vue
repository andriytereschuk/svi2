<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <Cards :cards="cards" />
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
  computed: {
    ...mapState('categories', ['categories']),
    ...mapState('rooms', ['rooms']),
    id() {
      return this.$route.params.category
    },
    category() {
      return this.categories.find(({ name }) => name === this.id)
    },
    title() {
      return this.category?.content?.name
    },
    items() {
      return this.rooms.filter(({ category }) => {
        const link = category.cached_url.split('/')[1]

        return link === this.id
      })
    },
    cards() {
      return this.items.map(
        ({ _uid: id, title, price, type: info, slides }) => ({
          link: {
            name: 'rooms-id',
            params: {
              id,
            },
          },
          title,
          info,
          price: price ? `${price} грн` : '',
          image: slides[0]?.image?.filename,
        })
      )
    },
  },
}
</script>

<style></style>
