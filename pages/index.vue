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

    <div class="flex-center pb-40">
      <a class="btn btn--primary" href="/homes">
        <i class="icon icon-plus"></i> <span>дивитися всі пропозиції</span></a
      >
    </div>
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
          price: '2750 грн/доба',
          link: '/homes/cottage',
        },
        {
          title: 'Двомісний',
          info: '',
          image: 'https://a.storyblok.com/f/153450/580x363/27cf969e6c/k10.jpg',
          price: '350 грн/доба',
          link: '/categories/double',
        },
        {
          title: 'Двомісний + 1',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/580x400/4581ffa06f/b2-k1.jpg',
          price: '450 грн/доба',
          link: '/categories/triple',
        },
        {
          title: 'Чотирихмісний',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/580x400/e350865437/k11-2.jpg',
          price: '600 грн/доба',
          link: '/categories/four',
        },
      ],
    }
  },
  async fetch({ store, app }) {
    if (store.state.gallery.slides.length) return
    return await store.dispatch('gallery/get', app)
  },
  head: {
    title:
      'SVILAKE - озеро Світязь. Літній відпочинок, житло, проживання в приватному секторі на Шацьких озерах. Свілейк.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Прекрасний літній відпочинок - запорука здорового, енергійного робочого року. А можливий гарний відпочинок на озері Світязь - Svilake. Шацькі озера – благодатний куточок України, який природа щедро наділила блакитними плесами озер, річок, ошатними лісами.',
      },
      {
        name: 'keywords',
        content:
          'свілейк,світязь,свитязь,озеро,літній,шацьк,шацк,житло,проживання',
      },
    ],
  },
  computed: {
    ...mapState('gallery', ['slides']),
    content() {
      return {
        title: 'svilake',
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
  padding: 0 0 10px;
}
</style>
