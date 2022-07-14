<template>
  <div class="container bus-page">
    <div class="bus-entry">
      <h1>
        Автобус з водієм на замовлення - Луцьк, Ковель, Турійськ, міжобласні
        поїздки.
      </h1>
      <p class="t-features">
        Особливості: регульовані сидіння, кондиціонер над кожним сидінням, паски
        безпеки, USB для зарядки телефона, телевізор. Панорамний люк, великий
        багажник.
        <strong>22 сидячих місця. </strong>
      </p>
      <p>
        Обслуговуємо різного роду заходи: урочистості, весілля, день народження,
        спортивні та туристичні змагання, екскурсії.
        <br />
        Трансфер пасажирів доступний і в інші області. Дзвоніть, пишіть - надамо
        детальнішу інформацію.
      </p>
    </div>

    <div class="t-container">
      <img
        src="https://a.storyblok.com/f/153450/1000x706/6b59f8148e/bus-front-left.jpg"
        alt=""
      />
      <img
        src="https://a.storyblok.com/f/153450/563x750/1354084802/bus-entry.jpg"
        alt=""
      />
      <img
        src="https://a.storyblok.com/f/153450/681x750/c4badca316/bus-left-seats.jpg"
        alt=""
      />
      <img
        src="https://a.storyblok.com/f/153450/563x750/dcd43e92a7/bus-two-seats.jpg"
        alt=""
      />
    </div>

    <section class="box t-contacts">
      <h2>Контакти для перевезень</h2>
      <textarea
        ref="areaNumber"
        class="area-number"
        :value="phoneNumber"
      ></textarea>
      <div class="t-phone">+380680351779</div>
      <a href="#" class="t-contact" @click="copy">Копіювати номер</a>
      <a
        href="https://t.me/+380680351779"
        class="t-contact"
        target="_blank"
        @click="track('sv_transfer_lutsk_telegram')"
        >Telegram</a
      >
      <a
        href="viber://chat/?number=%2B380680351779"
        class="t-contact"
        @click="track('sv_transfer_lutsk_viber')"
        >Viber</a
      >
    </section>

    <section class="box popular">
      <h2>Популярні маршрути з Луцька</h2>

      <ul class="t-places">
        <li>
          <div class="t-place-img">
            <img
              src="https://a.storyblok.com/f/153450/900x600/bdc69e066f/places-lviv.jpeg"
              loading="lazy"
              height="230"
              alt=""
            />
          </div>
          <span class="t-place-text">Луцьк - Львів</span>
        </li>

        <li>
          <div class="t-place-img">
            <img
              src="https://a.storyblok.com/f/153450/1180x730/bb548d6caa/places-karpaty.jpeg"
              loading="lazy"
              height="230"
              alt=""
            />
          </div>
          <span class="t-place-text">Луцьк - Карпати</span>
        </li>

        <li>
          <div class="t-place-img">
            <img
              src="https://a.storyblok.com/f/153450/800x533/e88d6b790d/places-bookovel.jpeg"
              loading="lazy"
              height="230"
              alt=""
            />
          </div>
          <span class="t-place-text">Луцьк - Буковель</span>
        </li>

        <li>
          <div class="t-place-img">
            <img
              src="https://a.storyblok.com/f/153450/1280x720/63c3d991f3/places-kosuno.jpeg"
              loading="lazy"
              height="230"
              alt=""
            />
          </div>
          <span class="t-place-text">Луцьк - Косино</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
const successCopyCb = () => alert('Номер скопійовано!')
const errorCopyCb = () => alert('Копіювання не підтримується вашим браузером')

export default {
  data() {
    return {
      phoneNumber: '+380680351779',
    }
  },
  head: {
    title:
      'Нерегулярні пасажирські перевезення з Луцька, Ковеля, Турійська. Поїздки по області та Україні',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Замовлення буса: Луцьк, Турійськ, Ковель, Луків, Ратне, по області та всередині країни',
      },
      {
        property: 'og:title',
        content:
          'Бус на замовлення | Луцьк | Ковель | Турійськ | Ратне | Міжобласні поїздки',
      },
      {
        property: 'og:url',
        content: 'https://www.svilake.com/transfer-lutsk-kovel',
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
        href: 'https://www.svilake.com/transfer-lutsk-kovel',
      },
    ],
  },
  methods: {
    copy(event) {
      event.preventDefault()

      this.track('sv_transfer_copy_lutsk')

      if (!navigator.clipboard) {
        this.fallbackCopy()
        return
      }
      navigator.clipboard
        .writeText(this.phoneNumber)
        .then(successCopyCb, errorCopyCb)
    },
    fallbackCopy() {
      this.$refs.areaNumber.focus()
      this.$refs.areaNumber.select()
      let isCopied = false
      try {
        isCopied = document.execCommand('copy')
      } catch (e) {
        isCopied = false
      }
      this.$refs.areaNumber.blur()
      return isCopied ? successCopyCb() : errorCopyCb()
    },
    track(eventName) {
      this.$gtag.event(eventName)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/transfer.scss';
</style>
