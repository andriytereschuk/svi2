<template>
  <div>
    <a v-for="(item, index) in items" :key="index" :data-src="item.src"></a>
  </div>
</template>

<script>
import lightGallery from 'lightgallery'
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
  data: () => ({
    plugins: [],
  }),
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
      plugins: [],
      speed: 500,
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
</style>
