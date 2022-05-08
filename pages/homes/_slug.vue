<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  async fetch({ store, app }) {
    if (store.state.rooms.rooms.length) return
    return await store.dispatch('rooms/fetchRooms', app)
  },
  computed: {
    title() {
      return this.$route.params.slug
    },
  },
}
</script>

<style></style>
