<template>
  <div class="container">
    <Intro v-if="id" :data="content"></Intro>
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
  head() {
    const title =
      this.content.title + ' / Будинок ' + this.content?.meta?.home?.name

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
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

      const { title, slides, price, description, type, home, category } =
        this.room

      return {
        title,
        slides,
        image: slides[0]?.image?.filename,
        price: +price,
        description,
        meta: {
          visible: true,
          type,
          home: {
            link: `/${home.cached_url}`,
            name: home.cached_url.split('/')[1],
          },
          category: {
            link: `/${category.cached_url}`,
            name: this.categories.find(({ uuid }) => uuid === category.id)
              ?.content?.name,
          },
        },
      }
    },
  },
}
</script>

<style></style>
