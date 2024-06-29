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
      <h2>Найкращі пропозиції</h2>
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
          image:
            'https://a.storyblok.com/f/153450/1000x750/e0cf0ed31c/cottage-general_1_1.jpg',
          price: '4000 грн/доба',
          link: '/homes/cottage',
        },
        {
          title: 'Двомісні',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/1e5aba2ac8/second_floor_room_4_3.jpg',
          price: 'від 500 грн/доба',
          link: '/categories/double',
        },
        {
          title: 'Два + один',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1200x801/e1348baf70/2024-1.jpeg',
          price: 'від 750 грн/доба',
          link: '/categories/triple',
        },
        {
          title: 'Апартаменти на 4-6 чол',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/4b4551bc2c/room_3_1.jpg',
          price: '2400 грн/доба',
          link: '/rooms/a1a67b5f-1e69-4f7d-b716-cfbee7daf7aa',
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
      {
        property: 'og:site_name',
        content: 'SVILAKE',
      },
      {
        property: 'og:url',
        content: 'https://svilake.com',
      },
      {
        property: 'og:image',
        content: 'https://svilake.com/content/common/main.jpg',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.svilake.com',
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
        meta: {
          visible: false,
        },
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
