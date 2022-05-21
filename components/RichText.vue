<template>
  <div class="richtext" v-html="richtext"></div>
</template>

<script>
export default {
  props: ['text'],
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';

.richtext {
  margin-bottom: 25px;

  > p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.04em;
    text-align: justify;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #4d4d4d;
    margin-bottom: 20px;
  }

  ul {
    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 5px;

      p {
        color: $grey;
        margin: 0;
        font-size: 13px;
      }

      &:before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: $orange;
        position: absolute;
        left: 0;
        top: 7px;
      }
    }
  }
}
</style>
