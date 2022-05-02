<template>
  <div class="container">
    <div class="head_title">
      <h1>Експрес-Бус Київ - Шацькі озера</h1>
      <p>Доїзд до Шацька, Світязя.</p>
    </div>
    <div class="row_transportation">
      <div class="col_left">
        <div class="card_car">
          <div class="left_img">
            <div class="slide_bus">
              <div class="item_bus">
                <img
                  src="https://a.storyblok.com/f/153450/700x350/53dd51eba9/kyiv.png"
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
                <span>Київ</span> <span>Шацькі озера</span>
              </div>
              <div class="route">
                <i></i>
                <span></span>
                <i></i>
              </div>
            </div>
            <a class="phone" href="tel:0671504647"
              ><i class="itel"></i> <span>067 150 4647</span></a
            >
            <div class="time">
              <div class="info_head">
                <i class="itime"></i> Дати відправлення на сайті
              </div>
              <!-- <span class="li"><em>8:20</em> Київ - Шацьк</span> -->
              <span class="li"
                ><a href="https://kiev-shatsk.com.ua/"
                  >https://kiev-shatsk.com.ua/</a
                ></span
              >
              <span class="li"><b>Час в дорозі:</b>7:15 годин</span>
            </div>

            <div class="price_bus">
              <div class="info_head"><i class="iprice"></i>Ціни:</div>
              <span class="li"><b>460 грн:</b>на Шацьк, Світязь</span>
            </div>

            <div class="model_bus">
              <div class="info_head"><i class="ibus"></i> Мікроавтобуси</div>
              <span class="li">Mercedes-Benz Sprinter</span>
            </div>
            <div class="star_bus">
              <div class="info_head"><i class="istar"></i>Комфорт:</div>
              <span class="li">кондиціонер</span>
              <span class="li">телевізор</span>
            </div>

            <p><b>Транзит до Шацьк, Світязь без зупинок на автостанціях.</b></p>
            <p>
              Забронювати місця можна зателефонувавши до диспетчера за номером
              тел. 0671504647.
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
    title: 'Експрес автобус Київ - Шацьк. Транзит на Шацькі озера.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Швидко заїхати з Києва на Шацькі озера',
      },
      {
        name: 'keywords',
        content: 'експрес, перевезення, київ, житомир, світязь, шацьк',
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
