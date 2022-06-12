<template>
  <div class="container contacts-page">
    <Intro :data="content" :is-services="false"></Intro>

    <section class="box">
      <h1>Схема доїзду</h1>

      <img src="content/common/map.jpg" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'SVILAKE - контакти і зворотній звязок',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Наша адреса і місцезнаходження',
      },
    ],
  },
  computed: {
    content() {
      return {
        title: 'Контакти',
        slides: [],
        services: [],
        meta: {
          visible: false,
        },
      }
    },
  },
}
</script>

<style lang="scss">
.contacts-page {
  .intro-img,
  .book {
    display: none !important;
  }

  .intro-info {
    min-height: auto !important;
  }
}
</style>
