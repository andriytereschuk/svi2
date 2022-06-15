<template>
  <div class="container bus-page">
    <div class="cols">
      <div class="cols-left">
        <div class="bus-entry">
          <h1>Експрес-Бусік Львів - Шацькі озера</h1>
          <p>
            Доїзд до Шацька, Світязя, Гряди, Медика, Лісова пісня, пансіонат
            "Шацькі озера".
          </p>
        </div>

        <div class="b-container">
          <a href="#" class="b-contact-btn" @click="copy"
            >Копіювати номер диспетчера</a
          >
          <div class="b-main-img">
            <img
              src="https://a.storyblok.com/f/153450/1000x750/c3b61e002b/bus-front-aside.jpg"
              alt=""
            />
          </div>
          <div class="b-img-1">
            <img
              src="https://a.storyblok.com/f/153450/1000x750/6b23fd1745/bus-front.jpg"
              alt=""
            />
          </div>
          <div class="b-img-2">
            <img
              src="https://a.storyblok.com/f/153450/563x750/1354084802/bus-entry.jpg"
              alt=""
            />
          </div>
        </div>

        <p>
          Лише одна зупинка на каву, без заїздів на автостанції. Поїздка дійсно
          буде комфортною і безпечною:
          <b>Mercedes-Benz Sprinter 515 пас</b> оснащений розкладними сидіннями
          з пасками безпеки і кондиціонером.
        </p>

        <ul class="b-time">
          <li><b>7:00</b> Львів - Шацьк</li>
          <li><b>16:00</b> Шацьк - Львів</li>
          <li>Час в дорозі: <b>3:30 год</b></li>
        </ul>

        <h2>Ціни зі Львова</h2>

        <ul class="b-prices">
          <li><i>300 грн</i> до Світязя, Шацька.</li>
          <li>
            <i>350 грн</i> до Гряди, Медик, "Лісова Пісня", пансіонат "Шацькі
            озера", Мельники, Пульмо.
          </li>
        </ul>

        <h2>Ціни з Червонограду</h2>

        <ul class="b-prices red-prices">
          <li><i>270 грн</i> до Світязя, Шацька.</li>
          <li>
            <i>320 грн</i> до Гряди, Медик, "Лісова Пісня", пансіонат "Шацькі
            озера", Мельники, Пульмо.
          </li>
        </ul>

        <p>
          <b>Забронювати місця</b> можна зателефонувавши до диспетчера за
          номером: <span class="b-call-number">+380976541951</span>
          <a href="#" class="b-contact-btn" @click="copy">Копіювати номер</a>
          <a
            href="tel:+380976541951"
            class="btn-call b-contact-btn"
            @click="track('sv_phone_call-lviv')"
            >Телефонувати</a
          >
        </p>
      </div>
      <div class="cols-right">
        <Bunner />
      </div>
    </div>
  </div>
</template>

<script>
const successCopyCb = () => alert('Номер скопійовано!')
const errorCopyCb = () => alert('Копіювання не підтримується вашим браузером')

export default {
  data() {
    return {
      phoneNumber: '+380976541951',
    }
  },
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
        property: 'og:site_name',
        content: 'Перевезення зі Львова на Шацькі озера',
      },
      {
        property: 'og:url',
        content: 'https://www.svilake.com/bus-ekspres-lviv-shatski-ozera',
      },
      {
        property: 'og:image',
        content:
          'https://a.storyblok.com/f/153450/1000x750/6b23fd1745/bus-front.jpg',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.svilake.com/bus-ekspres-lviv-shatski-ozera',
      },
    ],
  },
  methods: {
    copy(event) {
      event.preventDefault()

      this.track('sv_copy_number-lviv')

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
@import '~/assets/scss/vars.scss';

.bus-page {
  padding-bottom: 40px;

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  h2 {
    text-transform: none;
    font-weight: bold;
    font-size: 20px;
  }
}

.bus-entry {
  margin-bottom: 28px;

  h1 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 15px;
  }
}

.cols {
  display: flex;
  justify-content: space-between;

  &-left {
    width: 940px;
  }

  &-right {
    width: 320px;
    margin-left: 30px;
    padding-top: 26px;
  }
}

.b-container {
  display: grid;
  position: relative;
  grid-template-columns: 700px 261px;
  grid-template-rows: 195px 322px;
  grid-gap: 8px 8px;
  gap: 8px 8px;
  grid-auto-flow: row;
  grid-template-areas:
    'b-main-img b-img-1'
    'b-main-img b-img-2';
  margin-bottom: 25px;

  .b-contact-btn {
    position: absolute;
    right: -30px;
    top: -57px;
  }
}

.b-main-img {
  grid-area: b-main-img;
}

.b-img-1 {
  grid-area: b-img-1;
}

.b-img-2 {
  grid-area: b-img-2;
  overflow: hidden;
}

.b-prices {
  font-size: 16px;
  margin-bottom: 30px;

  li + li {
    margin-top: 5px;
  }

  i {
    color: $red;
    font-style: normal;
    color: #fff;
    background-color: $blue;
    display: inline-block;
    padding: 2px 5px;
  }
}

.red-prices i {
  background-color: $red;
}

.b-call-number {
  font-weight: bold;
  letter-spacing: 0.03em;

  @media #{$small} {
    display: block;
  }
}

.b-contact-btn {
  display: inline-block;
  padding: 6px;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid #9a9a9a;
  border-radius: 2px;
  background-color: #d8d8d8;
  font-family: Arial;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  top: -1px;

  @media #{$small} {
    padding: 6px 8px;
  }

  &:hover {
    background-color: #bebebe;
    border: 1px solid #808080;
  }
}

.b-time {
  display: flex;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 25px;

  li + li {
    margin-left: 100px;
  }

  @media #{$small} {
    flex-direction: column;

    li + li {
      margin-left: 0;
    }
  }
}

.btn-call {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}

@media (max-width: 1359px) {
  .cols {
    flex-direction: column;
    justify-content: flex-start;

    &-right {
      width: 100%;
      margin-left: 0;
      padding-top: 26px;
    }
  }

  .bus-page .cards.cards-vertical {
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex-basis: 320px;
    }

    li + li {
      margin-left: 10px;
    }
  }
}

@media #{$medium} {
  .cols {
    &-left {
      width: 100%;
    }
  }

  .b-container {
    display: block;
    max-width: 600px;

    .b-contact-btn {
      top: 10px;
      right: 10px;
    }
  }

  .b-img-1,
  .b-img-2 {
    display: none;
  }
}

@media #{$small} {
  .bus-page {
    h1 {
      font-size: 22px;
    }
  }

  .b-img-1,
  .b-img-2 {
    display: block;
    margin-top: 10px;
  }

  p .b-contact-btn {
    margin-top: 20px;
  }

  .bus-page .cards.cards-vertical {
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex-basis: 100%;
    }

    li + li {
      margin-left: 0;
    }
  }
}
</style>
