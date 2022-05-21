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
      <h1 v-if="data.title">{{ data.title }}</h1>
      <h1 v-else>
        Маєток <strong>SVILAKE</strong> - проживання на Світязі в приватному
        секторі
      </h1>

      <div class="subtitle">Наші cервіси:</div>

      <ul class="services">
        <li v-for="(service, index) of services" :key="index">
          <i class="icon" :class="getServiceClass(service)"></i>
          <span>{{ service }}</span>
        </li>
      </ul>

      <RichText v-if="data.description" :text="data.description" />

      <slot></slot>

      <ul v-if="isServices" class="quick-contacts">
        <li><i class="icon icon-phone-call"></i> <span>+380976541951</span></li>
        <li>
          <i class="icon icon-pin"></i>
          <span>с. Світязь, вул. Набережна 45</span>
        </li>
      </ul>
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
  border: 1px solid silver;
  background-color: #fff;

  &-img {
    position: relative;
    flex-basis: 43%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &-info {
    flex: 1;
    padding: 0 20px 20px 20px;
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
}

.services {
  display: flex;
  color: #666;
  font-size: 12px;
  margin-bottom: 30px;

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
</style>
