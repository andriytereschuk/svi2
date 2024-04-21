<template>
  <div class="gallery">
    <a v-for="(item, index) in items" :key="index" :data-src="item.src">
      <img :src="item.thumb" />
    </a>
  </div>
</template>

<script>
import lightGallery from 'lightgallery'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { isDev } from '@/helpers/isDev'

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    instance: null,
  }),
  computed: {
    items() {
      return this.images.map((image) => ({
        src: image,
        thumb: `${image}/m/0x140`,
      }))
    },
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initGallery()
      }
    },
  },
  mounted() {
    if (!this.instance) {
      this.instance = lightGallery(this.$el, {
        plugins: [lgThumbnail],
        speed: 500,
        download: false,
      })
    }

    this.$el.addEventListener('lgBeforeClose', () => {
      this.$emit('hide')
    })

    if (!isDev) {
      console.clear()
    }
  },
  beforeDestroy() {
    this.instance.destroy()
  },
  methods: {
    initGallery() {
      this.instance.openGallery(0)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';

$defaultColor: #d9d9d9;

.gallery {
  position: absolute;
  width: 0;
  height: 0;
}

.lg-counter {
  color: $defaultColor;
  font-size: 20px;
}

.lg-toolbar .lg-icon {
  color: $defaultColor;
  font-size: 32px;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
}

.lg-next,
.lg-prev {
  color: $defaultColor;
  font-size: 34px;
}

.lg-outer .lg-thumb-item.active,
.lg-outer .lg-thumb-item:hover {
  border-color: $primary;
}
</style>
