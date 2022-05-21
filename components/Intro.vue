<template>
  <section class="intro">
    <div class="intro-img" :style="mainImage">
      <button
        v-if="slides.length > 1"
        class="btn btn--primary"
        @click="openGallery"
      >
        <i class="icon icon-expand"></i>
        <span>фото галерея</span>
      </button>
    </div>

    <div class="intro-info">
      <div class="intro-content">
        <h1 v-if="data.title === 'svilake'">
          Маєток <strong>SVILAKE</strong> - проживання на Світязі в приватному
          секторі
        </h1>
        <h1 v-else-if="data.title">{{ data.title }}</h1>

        <div v-if="data.price" class="price-big">
          <div class="price-value">
            <span>{{ data.price }}</span> <b>грн</b>
          </div>
          <div class="price-notice"><sup>*</sup> за номер</div>
        </div>

        <ul v-if="data.meta" class="meta">
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
            <i class="icon icon-phone-call"></i> <span>+380976541951</span>
          </li>
          <li>
            <i class="icon icon-pin"></i>
            <span>с. Світязь, вул. Набережна 45</span>
          </li>
        </ul>
      </div>
    </div>

    <client-only>
      <vue-easy-lightbox
        :visible="isGalleryOpened"
        :imgs="slides"
        move-disabled
        @hide="closeGallery"
      ></vue-easy-lightbox>
    </client-only>
  </section>
</template>

<script>
const servicesMap = {
  'Free Wifi': 'wifi',
  Альтанки: 'pergola',
  Мангали: 'barbecue',
  Гойдалка: 'swing',
  Батут: 'trampoline',
  Parking: 'park',
}

export default {
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
  },
  methods: {
    openGallery() {
      this.isGalleryOpened = true
    },
    closeGallery() {
      this.isGalleryOpened = false
    },
    getServiceClass(name) {
      const icon = servicesMap[name]

      return `icon-${icon}`
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
}

.subtitle {
  font-size: 16px;
  font-weight: 700;
  color: #4d4d4d;
  margin-bottom: 20px;
}

button {
  position: absolute;
  right: 8px;
  bottom: 8px;

  @media #{$medium} {
    top: 8px;
    bottom: auto;
    padding: 10px;

    i {
      margin-right: 0;
    }

    span {
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
    align-items: center;
  }

  li + li {
    margin-left: 30px;
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
</style>
