<template>
  <div class="container">
    <h1>Як добратись до Світязя і Шацька</h1>
    <pre>{{ routes }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: {
    title:
      'Маршрутки, автобуси і експреси на Шацьк, Світязь, Гряду, Лісову пісню, Пансіонат Шацькі озера.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Чим заїхати до Шацька і Світязя зі Львова, Рівного, Київа, Тернополя, Івано - Франківська',
      },
      {
        name: 'keywords',
        content:
          'маршрутки, автобуси, експреси, світязя, гряди, шацька, пансіоната',
      },
      {
        property: 'og:url',
        content: 'http://svilake.com/routes',
      },
    ],
  },
  computed: {
    ...mapState('routes', ['routes']),
  },
}
</script>

<style></style>
