<template>
  <div class="container">
    <Intro :data="content" :is-services="false"></Intro>
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
    content() {
      if (!this.room) return {}

      const { slides, title, price, description } = this.room

      return {
        slides,
        title,
        price,
        description,
      }
    },
  },
}
</script>

<style></style>
