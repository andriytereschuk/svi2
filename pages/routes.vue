<template>
  <div class="container">
    <div class="head_title">
      <h1>Як добратись до Світязя і Шацька</h1>
      <p>
        Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат "Шацькі
        озера".
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, app }) {
    if (store.state.buses.buses.length) return
    return await store.dispatch('buses/fetchBuses', app)
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
        property: 'og:url',
        content: 'http://svilake.com/routes',
      },
    ],
  },
  computed: {
    ...mapState('buses', ['buses']),
  },
}
</script>

<style lang="scss" scoped></style>
