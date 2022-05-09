<template>
  <div class="container">
    <h1>{{ title }}</h1>
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
    room() {
      return this.rooms.find(({ _uid }) => _uid === this.id)
    },
    title() {
      return this.room?.title
    },
  },
}
</script>

<style></style>
