<template>
  <div>
    <BannerSmall />
    <div class="container">
      <div class="head_title">
        <h1>Як добратись до Світязя і Шацька</h1>
        <p>
          Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат
          "Шацькі озера".
        </p>
      </div>
      <div class="row_transportation">
        <div class="col_left">
          <ul class="list_transportation">
            <li v-for="(bus, index) of buses" :key="index" class="bus">
              <div class="bus_img">
                <img :src="bus.content.image.filename" alt="bus" />
              </div>
              <div class="bus_info">
                <em>{{ bus.content.Type }}</em>
                <span>{{ bus.content.Name }}</span>
                <b>від {{ bus.content.Price }} грн/місце</b>
              </div>
              <div class="bus_more">
                <a :href="bus.content.Link" class="btn btn_more">детальніше</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="col_right">
          <Bunner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, app }) {
    return Promise.all([
      store.state.buses.buses.length
        ? Promise.resolve()
        : store.dispatch('buses/fetchBuses', app),
      store.state.cards.cards.length
        ? Promise.resolve()
        : store.dispatch('cards/fetchCards', app),
    ])
  },
  head: {
    title:
      'Маршрутки, автобуси і експреси на Шацьк, Світязь, Гряду, Лісову пісню, Пансіонат Шацькі озера.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Чим заїхати до Шацька і Світязя зі Львова, Рівного, Київа, Тернополя, Івано - Франківська',
      },
      {
        name: 'keywords',
        content:
          'маршрутки, автобуси, експреси, світязя, гряди, шацька, пансіоната',
      },
      {
        property: 'og:site_name',
        content: 'Як добратись до Світязя і Шацька',
      },
      {
        property: 'og:url',
        content: 'http://svilake.com/routes',
      },
      {
        property: 'og:image',
        content:
          'https://a.storyblok.com/f/153450/1000x706/6b59f8148e/bus-front-left.jpg',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.svilake.com/routes',
      },
    ],
  },
  computed: {
    ...mapState('buses', ['buses']),
  },
}
</script>

<style lang="scss" scoped></style>
