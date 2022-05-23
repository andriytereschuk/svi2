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
let instance

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
  data: () => ({}),
  computed: {
    settings() {
      return {
        speed: 500,
        plugins: this.plugins,
      }
    },
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
    instance = lightGallery(this.$el, {
      plugins: [lgThumbnail],
      speed: 500,
      thumbHeight: '140px',
      thumbWidth: '187px',
      thumbMargin: 15,
      download: false,
    })

    this.$el.addEventListener('lgBeforeClose', () => {
      this.$emit('hide')
    })

    if (!isDev) {
      console.clear()
    }
  },
  beforeDestroy() {
    instance.destroy()
  },
  methods: {
    initGallery() {
      instance.openGallery(0)
    },
  },
}
</script>

<style lang="scss">
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';

.gallery {
  position: absolute;
  width: 0;
  height: 0;
}
</style>
