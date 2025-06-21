<template>
  <div>
    <BannerSmall />
    <div class="container bus-page">
      <div class="bus-entry">
        <h1>
          Автобус з водієм на замовлення - Львів, Червоноград, Броди,
          Трускавець, міжобласні поїздки.
        </h1>
        <p class="t-features">
          Комфорт: розкладні крісла, паски безпеки, кондиціонер над кожним
          сидінням, USB для зарядки, телевізор. Великий багажник, панорамний
          люк.
          <strong>22 сидячих місця. </strong>
        </p>
        <p>
          Обслуговуємо різного роду заходи: екскурсії, спортивні та туристичні
          змагання, весілля, день народження.
          <strong>Трансфер на відпочинок.</strong>
          <br />
          Перевезення доступні і в інші області. Дзвоніть, пишіть - надамо
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
          @click="track('sv_transfer_lviv_telegram')"
          >Telegram</a
        >
        <a
          href="viber://chat/?number=%2B380680351779"
          class="t-contact"
          @click="track('sv_transfer_lviv_viber')"
          >Viber</a
        >
      </section>

      <Places :data="places" />
    </div>
  </div>
</template>

<script>
const successCopyCb = () => alert('Номер скопійовано!')
const errorCopyCb = () => alert('Копіювання не підтримується вашим браузером')

export default {
  data() {
    return {
      phoneNumber: '+380680351779',
      places: {
        current: 'Львів',
        title: 'Популярні маршрути зі Львова',
        items: [
          'Славське',
          'Шацьк',
          'Буковель',
          'Косино',
          'Карпати',
          'Яремча',
          'Синевир',
          'Драгобрат',
        ],
      },
    }
  },
  head: {
    title: 'Замовлення автобуса Львів, Червоноград, ближні міста, села',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Нерегулярні пасажирські перевезення по Львівській області та всередині країни: Львів, Червоноград, Великі Мости, Броди, Трускавець, Новояворівськ, Самбір, Дрогобич',
      },
      {
        property: 'og:title',
        content:
          'Бус на замовлення | Львів | Червоноград | Область | Міжобласні поїздки',
      },
      {
        property: 'og:url',
        content: 'https://www.svilake.com/transfer-lviv-chervonohrad',
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
        href: 'https://www.svilake.com/transfer-lviv-chervonohrad',
      },
    ],
  },
  methods: {
    copy(event) {
      event.preventDefault()

      this.track('sv_transfer_copy_lviv')

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
