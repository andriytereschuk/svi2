<template>
  <div class="container">
    <Intro :data="content">
      <div class="richtext">
        <h3 class="pt-40">Варіанти розміщення:</h3>

        <ul>
          <li>Окремі кімнати - кухня, санвузол загальні</li>
          <li>Апартаменти</li>
          <li>Котедж</li>
        </ul>
      </div>
    </Intro>
    <section class="top-props">
      <Cards :cards="cards" />
    </section>
    <!-- <div class="flex-center">
      <a class="btn btn--primary" href="">
        <i class="icon icon-plus"></i> <span>дивитися всі пропозиції</span></a
      >
    </div> -->

    <client-only>
      <vue-easy-lightbox
        :visible="isGalleryOpened"
        :imgs="images"
        move-disabled
        @hide="closeGallery"
      ></vue-easy-lightbox>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isGalleryOpened: false,
      cards: [
        {
          title: 'Котедж',
          info: 'Будинок на 8-10 чол',
          image: '/content/homes/4/1.jpg',
          price: '3000 грн/доба',
          link: '',
        },
        {
          title: 'Двомісний',
          info: '',
          image: 'https://a.storyblok.com/f/153450/580x363/27cf969e6c/k10.jpg',
          price: '350 грн/доба',
          link: '',
        },
        {
          title: 'Двомісний + 1',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/580x400/4581ffa06f/b2-k1.jpg',
          price: '450 грн/доба',
          link: '',
        },
        {
          title: 'Чотирихмісний',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/580x400/e350865437/k11-2.jpg',
          price: '600 грн/доба',
          link: '',
        },
      ],
    }
  },
  async fetch({ store, app }) {
    if (store.state.gallery.slides.length) return
    return await store.dispatch('gallery/get', app)
  },
  computed: {
    ...mapState('gallery', ['slides']),
    content() {
      return {
        image: 'https://a.storyblok.com/f/153450/580x392/f3bfab5bd5/main.jpg',
        slides: this.slides,
        services: [],
      }
    },
    images() {
      return this.slides.map(({ image: { filename } }) => filename)
    },
  },
  methods: {
    openGallery() {
      this.isGalleryOpened = true
    },
    closeGallery() {
      this.isGalleryOpened = false
    },
  },
}
</script>

<style lang="scss">
.top-props {
  padding: 0 0 30px;
}
</style>
