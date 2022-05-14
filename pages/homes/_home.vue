<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="(room, index) of items" :key="index">
        <nuxt-link
          :to="{
            name: 'rooms-id',
            params: { id: room._uid },
          }"
        >
          <h2>{{ room.title }}</h2>
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
  computed: {
    ...mapState('categories', ['categories']),
    ...mapState('rooms', ['rooms']),
    id() {
      return this.$route.params.id
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
  },
}
</script>

<style></style>
