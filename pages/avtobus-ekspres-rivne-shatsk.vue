<template>
  <div class="container">
    <div class="head_title">
      <h1>Експрес-Бус Рівне - Шацькі озера</h1>
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
                  src="https://a.storyblok.com/f/153450/600x430/285c4d6203/rivne1.jpg"
                  alt=""
                />
              </div>
              <div class="item_bus">
                <img
                  src="https://a.storyblok.com/f/153450/600x415/2de71696a6/rivne2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="right_info">
            <div class="head_route">
              <div class="head">
                <span>Рівне</span> <span>Шацькі озера</span>
              </div>
              <div class="route">
                <i></i>
                <span></span>
                <i></i>
              </div>
            </div>
            <a class="phone" href="tel:0979519096"
              ><i class="itel"></i> <span>(097) 951-90-96</span></a
            >
            <a class="phone" href="tel:0934097038"
              ><i class="itel"></i> <span>(093) 409-70-38</span></a
            >
            <div class="time">
              <div class="info_head">
                <i class="itime"></i> Час відправлення
              </div>
              <span class="li"><em>7:30</em> Рівне - Шацьк</span>
              <span class="li"><em>15:30</em> Шацьк - Рівне</span>
              <span class="li"><b>Час в дорозі:</b>4:00 годин</span>
            </div>

            <div class="price_bus">
              <div class="info_head"><i class="iprice"></i>Ціни:</div>
              <span class="li"><b>200 грн:</b>на Шацьк, Світязь</span>
            </div>

            <div class="model_bus">
              <div class="info_head"><i class="ibus"></i> Мікроавтобуси</div>
              <span class="li">SETRA 309 Top class</span>
              <span class="li">Мersedes SPRINTER</span>
            </div>
            <div class="star_bus">
              <div class="info_head"><i class="istar"></i>Комфорт:</div>
              <span class="li">кондиціонер</span>
              <span class="li">телевізор</span>
            </div>

            <p><b>Лише одна зупинка на каву, без заїздів на автостанції.</b></p>
            <p>
              Забронювати місця можна зателефонувавши до диспетчера за номером
              тел. (097) 951-90-96, (093) 409-70-38.
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
  head: {
    title: 'ЕКСПРЕС Рівне–Світязь (Шацьк, Гряда, Мельники, "Лісова пісня").',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Швидко і комфортно заїхати з Рівного на Шацькі озера',
      },
      {
        name: 'keywords',
        content: 'автобус, експрес, маршрутка, рівне, шацьк, світязь, гряда',
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
