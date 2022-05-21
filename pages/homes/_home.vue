<template>
  <div v-if="home" class="container">
    <Intro :data="content" />
    <!-- <section class="intro">
      <div class="main-img">
        <button class="btn btn--primary" @click="openGallery">
          <i class="icon icon-expand"></i>
          <span>фото галерея</span>
        </button>
        <img :src="content.mainImage.filename" alt="" />
      </div>
      <div class="main-txt">
        <h1>
          Маєток <strong>SVILAKE</strong> - проживання на Світязі в приватному
          секторі
        </h1>

        <h2>Наші cервіси:</h2>

        <ul class="services">
          <li>
            <i class="icon icon-wifi"></i>
            <span>Free Wifi</span>
          </li>
          <li>
            <i class="icon icon-pergola"></i>
            <span>Альтанки</span>
          </li>
          <li>
            <i class="icon icon-barbecue"></i>
            <span>Мангали</span>
          </li>
          <li>
            <i class="icon icon-swing"></i>
            <span>Гойдалка</span>
          </li>
          <li>
            <i class="icon icon-trampoline"></i>
            <span>Батут</span>
          </li>
          <li>
            <i class="icon icon-park"></i>
            <span>Parking</span>
          </li>
        </ul>

        <h2 class="title-options">Варіанти розміщення:</h2>

        <ul class="list">
          <li>Окремі кімнати - кухня, санвузол загальні</li>
          <li>Апартаменти</li>
          <li>Котедж</li>
        </ul>

        <ul class="quick-contacts">
          <li>
            <i class="icon icon-phone-call"></i> <span>+380976541951</span>
          </li>
          <li>
            <i class="icon icon-pin"></i>
            <span>с. Світязь, вул. Набережна 45</span>
          </li>
        </ul>
      </div>
    </section> -->

    <pre>{{ content }}</pre>
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
    ])
  },
  computed: {
    ...mapState('homes', ['homes']),
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
  },
}
</script>

<style></style>
