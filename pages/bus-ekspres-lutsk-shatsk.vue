<template>
  <div class="container">
    <div class="head_title">
      <h1>Експрес-Бус Луцьк - Шацькі озера</h1>
      <p>
        Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат "Шацькі
        озера".
      </p>
    </div>
    <div class="row_transportation">
      <div class="col_left">
        <div class="card_car">
          <div class="left_img">
            <div class="slide_bus">
              <div class="item_bus">
                <img
                  src="https://a.storyblok.com/f/153450/600x422/0a87e65704/lutsk1.jpg"
                  alt=""
                />
              </div>
              <div class="item_bus">
                <img
                  src="https://a.storyblok.com/f/153450/600x394/b4315fc2d6/lutsk3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="right_info">
            <div class="head_route">
              <div class="head">
                <span>Луцьк</span> <span>Шацькі озера</span>
              </div>
              <div class="route">
                <i></i>
                <span></span>
                <i></i>
              </div>
            </div>
            <a class="phone" href="tel:0992624841"
              ><i class="itel"></i> <span>(099) 262 4841</span></a
            >
            <a class="phone" href="tel:0938801200"
              ><i class="itel"></i> <span>(093) 880 1200</span></a
            >
            <div class="time">
              <!-- <div class="info_head">
                <i class="itime"></i> Час відправлення
              </div>
              <span class="li"><em>8:20</em> Луцьк - Шацьк</span>
              <span class="li"><em>16:00</em> Шацьк - Луцьк</span> -->
              <span class="li"><b>Час в дорозі:</b>2:30 годин</span>
            </div>

            <div class="price_bus">
              <div class="info_head"><i class="iprice"></i>Ціни:</div>
              <span class="li"><b>150 грн:</b>на Шацьк, Світязь</span>
            </div>

            <div class="model_bus">
              <div class="info_head"><i class="ibus"></i> Мікроавтобуси</div>
              <span class="li">Mersedes Sprinter 518</span>
              <span class="li">Volkswagen LT 35</span>
              <span class="li">Fiat Ducato MAXI</span>
            </div>
            <div class="star_bus">
              <div class="info_head"><i class="istar"></i>Комфорт:</div>
              <span class="li">кондиціонер</span>
              <span class="li">телевізор</span>
            </div>
            <p>
              Забронювати місця можна зателефонувавши до диспетчера за номером
              тел. (099) 262 4841, (093) 880 1200.
            </p>
          </div>
        </div>
      </div>
      <div class="col_right">
        <Bunner />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, app }) {
    if (store.state.cards.cards.length) return
    return await store.dispatch('cards/fetchCards', app)
  },
  head: {
    title:
      'Перевезення Луцьк - Шацькі озера. Автобус-експрес на Світязь, Гряда, Медик',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Чим найшвидше заїхати з Луцька до Шацька',
      },
      {
        name: 'keywords',
        content: 'маршрутка, автобус, експрес, луцьк, шацьк, світязь',
      },
      {
        property: 'og:url',
        content: 'http://svilake.com',
      },
    ],
  },
}
</script>

<style></style>
