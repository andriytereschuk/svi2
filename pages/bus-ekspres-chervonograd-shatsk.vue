<template>
  <div>
    <BannerSmall />
    <div class="container">
      <div class="head_title">
        <h1>Експрес-Бус Червоноград - Шацькі озера</h1>
        <p>
          Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат
          "Шацькі озера".
        </p>
      </div>
      <div class="row_transportation">
        <div class="col_left">
          <div class="card_car">
            <div class="left_img">
              <div class="slide_bus">
                <div class="item_bus">
                  <img
                    src="https://a.storyblok.com/f/153450/1036x950/f9f7742838/chervonograd-roma.png"
                    alt=""
                  />
                </div>
                <div class="item_bus">
                  <img
                    src="https://a.storyblok.com/f/153450/600x422/0a87e65704/lutsk1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="right_info">
              <div class="head_route">
                <div class="head">
                  <span>Червоноград</span> <span>Шацькі озера</span>
                </div>
                <div class="route">
                  <i></i>
                  <span></span>
                  <i></i>
                </div>
              </div>
              <a class="phone" href="tel:0976541951"
                ><i class="itel"></i> <span>097 654 1951</span></a
              >
              <div class="time">
                <div class="info_head">
                  <i class="itime"></i> Час відправлення
                </div>
                <span class="li"><em>8:20</em> Червоноград - Шацьк</span>
                <span class="li"><em>16:00</em> Шацьк - Червоноград</span>
                <span class="li"><b>Час в дорозі:</b>3 - 3:30 годин</span>
              </div>

              <div class="price_bus">
                <div class="info_head"><i class="iprice"></i>Ціни:</div>
                <span class="li"
                  ><b>350 грн:</b>до Світязя, Шацька, Гряди, пансіонат "Шацькі
                  озера".</span
                >
                <span class="li"
                  ><b>400 грн:</b>Мельники, Гаївка (Лісова пісня).</span
                >
                <span class="li"><b>450 грн:</b>Медик, Пульмо.</span>
              </div>

              <!-- <div class="model_bus">
              <div class="info_head"><i class="ibus"></i> Мікроавтобуси</div>
              <span class="li">Volkswagen Transporter</span>
              <span class="li">Opel</span>
            </div> -->
              <div class="star_bus">
                <div class="info_head"><i class="istar"></i>Комфорт:</div>
                <span class="li">кондиціонер</span>
                <span class="li">телевізор</span>
              </div>

              <p>
                <b>Лише одна зупинка на каву, без заїздів на автостанції.</b>
              </p>
              <p>
                Забронювати місця можна зателефонувавши до диспетчера за номером
                тел. 097 654 1951.
              </p>
            </div>
          </div>
        </div>
        <div class="col_right">
          <Bunner />
        </div>
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
    title: 'Експрес бус Червоноград, Сокаль - Шацькі озера.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Чим заїхати з Червонограда на Шацькі озера',
      },
      {
        name: 'keywords',
        content:
          'бус, автобус, експрес, червоноград, сокаль, шацьк, світязь, гряда',
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
