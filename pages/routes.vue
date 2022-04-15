<template>
  <div class="container">
    <div class="row_transportation">
      <div class="col_left">
        <h1>Як добратись до Світязя і Шацька</h1>
        <p>
          Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат
          "Шацькі озера".
        </p>
        <ul class="list_transportation">
          <li class="bus" v-for="(bus, index) of buses" :key="index">
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
      <div class="col_right"></div>
    </div>
    <pre>{{ buses }}</pre>
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

<style lang="scss">
.row_transportation {
  display: flex;
  justify-content: space-between;
}

.col_left {
  width: calc(100% - 350px);
}

.col_right {
  width: 330px;
}

ul.list_transportation {
  display: flex;
  flex-direction: column;
}

.bus {
  display: flex;
  margin-bottom: 30px;
  box-shadow: 0px 5px 40px rgb(45 141 254 / 12%);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  align-items: center;
  flex-wrap: wrap;
}

.bus_img {
  height: 170px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bus > div {
  width: 25%;
}

.bus_img img {
  object-fit: cover;
  height: 100%;
}

.bus .bus_info {
  display: inline-flex;
  flex-direction: column;
  padding-left: 80px;
  width: 50%;
}

.btn_more {
  background: #0e77f1;
  color: #fff;
  height: 34px;
  text-transform: capitalize;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.3s;
}
.bus_more {
  display: flex;
  justify-content: center;
}
.bus_more {
  display: flex;
  justify-content: center;
}

.bus_info span {
  font-weight: 700;
  font-size: 22px;
  line-height: 120%;
  color: #0e77f1;
  padding: 10px 0;
}
.btn_more:hover {
  background: #0b468b;
}
h1 {
  color: #001e41;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  padding: 20px 0 10px;
}

.col_left > p {
  font-size: 16px;
  margin-bottom: 30px;
}
</style>
