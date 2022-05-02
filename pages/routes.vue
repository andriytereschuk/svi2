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

<style lang="scss" scoped>
.row_transportation {
  display: flex;
  justify-content: space-between;
}
.sidebar_title {
  display: none;
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

.btn_more,
.btn_blue,
.btn_orange {
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
  &:hover {
    background: #0b468b;
  }
}
.btn_orange {
  background: #ee8e00;
  &:hover {
    background: #c67600;
  }
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
.col_right .box {
  box-shadow: 0px 5px 40px rgba(45, 141, 254, 0.12);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.head_title p {
  font-size: 18px;
}
.head_title {
  margin-bottom: 50px;
}
.box-desc {
  padding: 10px;
  display: flex;
  align-items: center;
}

.box_sub {
  width: calc(100% - 115px);
}

.box-title {
  font-size: 18px;
  display: flex;
  font-weight: bold;
  margin-bottom: 4px;
}
.box-price {
  background: #fff3d0;
  display: inline-flex;
  padding: 2px 4px;
  border-radius: 6px;
  margin-top: 5px;
}
.box-img {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-img img {
  object-fit: contain;
}

@media (max-width: 1400px) {
  .bus .bus_info {
    padding-left: 40px;
    width: 100%;
  }
  li.bus {
    flex-wrap: inherit;
  }
  .bus .bus_img {
    width: 230px;
    flex-shrink: 0;
  }
  .bus .bus_more {
    width: 200px;
    flex-shrink: 0;
  }
}
@media (max-width: 1200px) {
  .bus .bus_info {
    padding-left: 20px;
  }
  .bus .bus_more {
    width: 150px;
  }
  .bus_info span {
    font-size: 18px;
  }
}
@media (max-width: 990px) {
  .bus .bus_info {
    padding-left: 20px;
    padding-bottom: 50px;
  }
  .bus_info span {
    font-size: 16px;
  }
  .col_right {
    width: 230px;
  }
  .box-img {
    height: 130px;
  }
  .box_sub {
    width: 100%;
  }
  .box-desc {
    flex-direction: column;
  }
  .box-desc .btn_orange {
    margin-top: 15px;
  }
  a.btn.btn--primary {
    padding: 10px 5px;
    font-size: 12px;
  }
  .col_left {
    width: calc(100% - 250px);
  }
  li.bus {
    position: relative;
  }
  .bus .bus_more {
    position: absolute;
    bottom: 15px;
    left: 226px;
    width: 150px;
  }
}
@media (max-width: 767px) {
  .head_title h1 {
    font-size: 26px;
  }
  .head_title p {
    font-size: 16px;
  }
  .head_title {
    margin-bottom: 35px;
  }
  .col_left {
    width: 100%;
  }
  .row_transportation {
    flex-direction: column;
  }
  .bus .bus_img {
    width: 140px;
    height: 150px;
  }
  .bus .bus_info {
    padding-left: 15px;
    padding-bottom: 40px;
  }
  .bus_info span {
    font-size: 14px;
    padding-right: 5px;
    padding-top: 2px;
  }
  .bus .bus_more {
    left: 130px;
    bottom: 10px;
  }
  li.bus {
    margin-bottom: 15px;
  }
  .col_right {
    width: 100%;
  }
  .sidebar_title {
    display: block;
    font-size: 28px;
    padding: 50px 0 20px;
  }
}
</style>
