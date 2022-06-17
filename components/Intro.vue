<template>
  <section class="intro">
    <div v-if="data.image" class="intro-img" :style="mainImage">
      <button
        v-if="slides.length > 1"
        class="btn-gallery btn btn--primary"
        @click="openGallery"
      >
        <i class="icon icon-expand"></i>
        <span>всі фото</span>
      </button>
    </div>

    <div class="intro-info">
      <div class="intro-content">
        <h1 v-if="data.title === 'svilake'">
          Маєток <strong>SVILAKE</strong> - проживання на Світязі в приватному
          секторі
        </h1>
        <h1 v-else-if="data.title">
          {{ data.title }}
          <nuxt-link to="/booking" class="book" @click="track('sv_booking')"
            >Як забронювати?</nuxt-link
          >
        </h1>

        <div v-if="data.price" class="price-big">
          <div class="price-value">
            <span>{{ data.price }}</span> <b>грн</b>
          </div>
          <div class="price-notice"><sup>*</sup> за номер</div>
        </div>

        <ul v-if="data.meta.visible" class="meta">
          <li>
            <b>Категорія:</b>
            <nuxt-link :to="data.meta.category.link">{{
              data.meta.category.name
            }}</nuxt-link>
          </li>
          <li>
            <b>Будинок:</b>
            <nuxt-link :to="data.meta.home.link">{{
              data.meta.home.name
            }}</nuxt-link>
          </li>
          <li>
            <b>Тип:</b> <span>{{ data.meta.type }}</span>
          </li>
        </ul>

        <div v-if="isServices">
          <div class="subtitle">Наші cервіси:</div>

          <ul class="services">
            <li v-for="(service, index) of services" :key="index">
              <i class="icon" :class="getServiceClass(service)"></i>
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>

        <RichText v-if="data.description" :text="data.description" />

        <slot></slot>

        <ul class="quick-contacts">
          <li>
            <div class="contact">
              <i class="icon icon-phone-call"></i>
              <span>{{ phoneNumber }}</span>
            </div>

            <div>
              <textarea
                ref="areaNumber"
                class="area-number"
                :value="phoneNumber"
              ></textarea>
              <a
                href="tel:+380976541951"
                class="btn-call btn-contact"
                @click="track('sv_phone_call')"
                >Телефонувати</a
              >
              <a href="#" class="btn-contact" @click="copy">Копіювати номер</a>
              <a
                href="viber://chat/?number=%2B380976541951"
                class="btn-contact"
                title="Відкрити в додатку. Для цього він має бути встановлений на вашому пристрою"
                @click="track('sv_open_viber')"
                >Viber</a
              >
            </div>
          </li>
          <li>
            <div class="contact">
              <i class="icon icon-pin"></i>
              <span>с. Світязь, вул. Набережна 45</span>
            </div>
            <div>
              <a
                :href="mapAddress"
                target="_blank"
                class="btn-contact"
                @click="track('sv_open_gmap')"
                >Відкрити в Google Maps</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>

    <client-only>
      <Gallery
        v-if="slides.length"
        :visible="isGalleryOpened"
        :images="slides"
        @hide="closeGallery"
      ></Gallery>
    </client-only>
  </section>
</template>

<script>
import Gallery from './Gallery.vue'

const servicesMap = {
  'Free Wifi': 'wifi',
  Альтанки: 'pergola',
  Мангали: 'barbecue',
  Гойдалка: 'swing',
  Батут: 'trampoline',
  Parking: 'park',
}

const successCopyCb = () => alert('Номер скопійовано!')
const errorCopyCb = () => alert('Копіювання не підтримується вашим браузером')

export default {
  components: { Gallery },
  props: {
    data: {
      type: Object,
      default: () => ({
        image: '',
        price: 0,
        slides: [],
        services: [],
      }),
    },
    isServices: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isGalleryOpened: false,
      phoneNumber: '+380976541951',
      mapAddress:
        'https://www.google.com.ua/maps/place/%D0%9C%D0%B0%D1%94%D1%82%D0%BE%D0%BA+Svilake/@51.4894711,23.8583094,14.51z/data=!4m5!3m4!1s0x4723e527dfc32f49:0x2f7244ecb5f1ef51!8m2!3d51.4859754!4d23.8633091?hl=uk',
    }
  },
  computed: {
    mainImage() {
      return {
        backgroundImage: `url("${this.data.image}")`,
      }
    },
    slides() {
      return this.data.slides.map(({ image: { filename } }) => filename)
    },
    services() {
      return this.data.services && this.data.services.length
        ? this.data.services
        : Object.keys(servicesMap)
    },
    analyticsContext() {
      if (!this.data.meta.visible) return null

      return {
        sv_category: this.data.meta.category?.name,
        sv_home: this.data.meta.home?.name,
        sv_type: this.data.meta.type,
        sv_price: this.data.price,
      }
    },
  },
  methods: {
    openGallery() {
      this.track('sv_open_photos')
      this.isGalleryOpened = true
    },
    closeGallery() {
      this.isGalleryOpened = false
    },
    getServiceClass(name) {
      const icon = servicesMap[name]

      return `icon-${icon}`
    },
    copy(event) {
      event.preventDefault()

      this.track('sv_copy_phone_number')

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
      return this.analyticsContext
        ? this.$gtag.event(eventName, this.analyticsContext)
        : this.$gtag.event(eventName)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars.scss';

.intro {
  display: flex;
  margin-top: 14px;
  margin-bottom: 40px;
  background-color: #fff;
  border: 1px solid silver;

  @media #{$medium} {
    background-color: transparent;
    border: none;
  }

  @media #{$small} {
    flex-direction: column;
    margin-top: 1px;
    position: relative;
  }

  &-img {
    position: relative;
    flex-basis: 43%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    @media #{$laptop} {
      flex-basis: 50%;
    }

    @media #{$medium} {
      background-size: 100%;
      flex-basis: 45%;
    }

    @media #{$small} {
      flex: 1;
      flex-basis: 100%;
      padding-top: 67%;
      background-size: cover;
    }
  }

  &-info {
    flex: 1;
    position: relative;
    min-height: 461px;

    @media #{$small} {
      min-height: auto;
      position: static;
    }
  }

  &-content {
    background-color: #fff;
    padding: 0 20px 20px 20px;

    @media #{$medium} {
      border: 1px solid silver;
    }
  }
}

h1 {
  margin-bottom: 32px;
  font-size: 18px;
  position: relative;
}

.book {
  display: inline-block;
  background-color: #42a446;
  color: #fff;
  padding: 8px;
  border-radius: 15px;
  margin-left: 20px;
  font-size: 13px;
  line-height: 13px;
  position: relative;
  top: -2px;
  z-index: 2;

  &:hover {
    background-color: #087f23;
  }

  @media #{$medium} {
    position: absolute;
    right: -10px;
    top: 80px;
  }

  @media #{$small} {
    position: absolute;
    left: -27px;
    right: auto;
    bottom: 40px;
    top: auto;
    font-size: 11px;
    padding: 8px 10px;
    text-transform: uppercase;
  }
}

.subtitle {
  font-size: 16px;
  font-weight: 700;
  color: #4d4d4d;
  margin-bottom: 20px;
}

.btn-gallery {
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 2;

  @media #{$medium} {
    top: 8px;
    bottom: auto;
    padding: 8px;
  }

  @media #{$small} {
    top: auto;
    bottom: -15px;
    right: 13px;
    padding: 7px 12px;
    border-radius: 15px;
    font-size: 11px;

    i {
      display: none;
    }
  }
}

.services {
  display: flex;
  color: #666;
  font-size: 12px;
  margin-bottom: 30px;

  @media #{$small} {
    flex-wrap: wrap;

    li {
      min-width: 70px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      white-space: nowrap;
    }
  }

  li + li {
    margin-left: 60px;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  @media #{$laptop} {
    .icon {
      width: 30px;
      height: 30px;
    }

    li + li {
      margin-left: 40px;
    }
  }

  @media #{$small} {
    .icon {
      width: 25px;
      height: 25px;
    }

    li + li {
      margin-left: 0;
    }

    li {
      margin-right: 30px;
      margin-bottom: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.quick-contacts {
  display: flex;
  color: #666;
  font-size: 14px;

  i {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .icon-pin {
    margin-right: 5px;
  }

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  li + li {
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid silver;
  }

  @media #{$small} {
    flex-direction: column;

    li + li {
      margin-left: 0;
      padding-left: 0;
      border-left: none;
    }
  }
}

.contact {
  display: flex;
  white-space: nowrap;
}

.btn-contact {
  display: inline-block;
  padding: 5px;
  font-size: 12px;
  line-height: 14px;
  border: 1px solid #9a9a9a;
  border-radius: 2px;
  background-color: #efefef;
  font-family: Arial;
  white-space: nowrap;
  cursor: pointer;

  @media #{$small} {
    padding: 6px 8px;
  }

  &:hover {
    background-color: #e9e9e9;
    border: 1px solid #808080;
  }
}

.btn-contact + .btn-contact {
  margin-left: 5px;
}

.btn-call {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}

.price-big {
  position: absolute;
  top: 0;
  right: 0;
}

.price-value {
  padding: 0 40px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: $primary;
  color: #fff;

  span {
    font-size: 30px;
  }

  b {
    font-size: 24px;
    font-weight: normal;
  }

  @media #{$medium} {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
  }

  @media #{$small} {
    display: inline-block;
    padding: 0 12px;
    height: 36px;
    line-height: 35px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);

    span {
      font-size: 20px;
    }

    b {
      font-size: 18px;
    }
  }
}

.price-notice {
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  position: absolute;
  bottom: -20px;
  right: 10px;
  color: $secondary;

  sup {
    position: relative;
    font-size: 16px;
    top: 5px;
  }

  @media #{$small} {
    display: none;
  }
}

.meta {
  padding-bottom: 40px;
  font-size: 15px;

  li + li {
    margin-top: 5px;
  }

  b {
    font-weight: 700;
    color: #4d4d4d;
  }

  span {
    color: $grey;
  }

  a {
    color: $secondary;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

@media #{$small} {
  .pt-40 {
    padding-top: 0;
  }
}

@media only screen and (max-width: 1490px) {
  .quick-contacts {
    li {
      flex-direction: column;

      .contact {
        margin-bottom: 10px;
      }
    }
  }
}

@media #{$small} {
  .quick-contacts {
    li + li {
      margin-top: 30px;
    }
  }
}
</style>
