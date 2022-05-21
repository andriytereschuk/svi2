<template>
  <div v-if="home" class="container">
    <Intro :data="content"></Intro>
    <Cards :cards="cards" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, app }) {
    return Promise.all([
      store.state.homes.homes.length
        ? Promise.resolve()
        : store.dispatch('homes/fetchHomes', app),
      store.state.rooms.rooms.length
        ? Promise.resolve()
        : store.dispatch('rooms/fetchRooms', app),
    ])
  },
  computed: {
    ...mapState('homes', ['homes']),
    ...mapState('rooms', ['rooms']),
    id() {
      return this.$route.params.home
    },
    home() {
      return this.homes.length
        ? this.homes.find(({ name: _id }) => _id === this.id)
        : null
    },
    content() {
      if (!this.home.content) return {}

      const { mainImage, slides, title, services, description } =
        this.home.content

      return {
        title,
        image: mainImage.filename,
        slides,
        services,
        description,
      }
    },
    filteredRooms() {
      return this.rooms.filter(({ home }) => {
        const link = home.cached_url.split('/')[1]

        return link === this.id
      })
    },
    cards() {
      return this.filteredRooms.map(
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
