<template>
  <div class="container">
    <div class="head_title">
      <h1>Експрес-Бусік Львів - Шацькі озера</h1>
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
                <span>Львів</span> <span>Шацькі озера</span>
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
              <span class="li"><em>7:00</em> Львів - Шацьк</span>
              <span class="li"><em>16:00</em> Шацьк - Львів</span>
              <span class="li"><b>Час в дорозі:</b>3 - 3:30 годин</span>
            </div>

            <div class="price_bus">
              <div class="info_head"><i class="iprice"></i>Ціни:</div>
              <span class="li"><b>220 грн:</b>на Шацьк, Світязь</span>
              <span class="li"
                ><b>240 грн:</b>на Гряда, Медик, "Лісова Пісня", пансіонат
                "Шацькі озера", Мельники, Пульмо</span
              >
            </div>

            <div class="model_bus">
              <div class="info_head"><i class="ibus"></i> Мікроавтобуси</div>
              <span class="li">Volkswagen Transporter</span>
              <span class="li">Opel</span>
            </div>
            <div class="star_bus">
              <div class="info_head"><i class="istar"></i>Комфорт:</div>
              <span class="li">розкладні крісла</span>
              <span class="li">кондиціонер</span>
            </div>

            <p><b>Лише одна зупинка на каву, без заїздів на автостанції.</b></p>
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
</template>

<script>
export default {
  head: {
    title:
      'Експрес-Бус Львів - Шацьк. Перевезення на Світязь, Медик, пансіонат Шацькі озера,Мельники, Лісова пісня, Гряда.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Чим швидко і комфортно заїхати зі Львова на Шацькі озера',
      },
      {
        name: 'keywords',
        content:
          'експрес, перевезення, автобус, львів, світязь, гряди, шацька, пансіоната',
      },
      {
        property: 'og:url',
        content: 'http://svilake.com',
      },
    ],
  },
}
</script>
