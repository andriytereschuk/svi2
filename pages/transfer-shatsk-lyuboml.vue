<template>
  <div>
    <BannerSmall />
    <div class="container bus-page">
      <div class="bus-entry">
        <h1>
          Бус з водієм на замовлення - Шацьк, Любомль, ближні села, район,
          міжобласні поїздки.
        </h1>
        <p class="t-features">
          Комфорт: розкладні крісла, паски безпеки, кондиціонер, телевізор, USB
          для зарядки. Великий багажник, панорамний люк.
          <strong>22 сидячих місця.</strong>
        </p>
        <p>
          Обслуговуємо різного роду заходи: урочистості, весілля, день
          народження, спортивні та туристичні змагання, екскурсії, розвозка
          працівників.
          <br />
          Трансфер пасажирів доступний і в інші області. Дзвоніть, пишіть -
          надамо детальнішу інформацію.
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
          @click="track('sv_transfer_shatsk_telegram')"
          >Telegram</a
        >
        <a
          href="viber://chat/?number=%2B380680351779"
          class="t-contact"
          @click="track('sv_transfer_shatsk_viber')"
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
        current: 'Шацьк',
        title: 'Популярні маршрути з Шацька',
        items: [
          'Львів',
          'Буковель',
          'Славське',
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
    title:
      'Нерегулярні пасажирські перевезення з Шацька, Любомля, ближніх сіл - по району та Україні',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Замовлення, оренда автобуса для поїздок. Таксі бус. Шацьк, Любомль, Світязь, Згорани, Мельники, Пульмо, Головне, Машів, по всьому району та всередині країни',
      },
      {
        property: 'og:title',
        content:
          'Бус на замовлення | Шацьк | Любомль | Район | Міжобласні поїздки',
      },
      {
        property: 'og:url',
        content: 'https://www.svilake.com/transfer-shatsk-lyuboml',
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
        href: 'https://www.svilake.com/transfer-shatsk-lyuboml',
      },
    ],
  },
  methods: {
    copy(event) {
      event.preventDefault()

      this.track('sv_transfer_copy_shatsk')

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
