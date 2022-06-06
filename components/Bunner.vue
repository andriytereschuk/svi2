<template>
  <div>
    <h2>Вашій увазі <strong>житло в Світязі</strong></h2>
    <Cards :cards="cards" is-vertical />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Котедж',
          info: 'Будинок на 8-10 чол',
          image:
            'https://a.storyblok.com/f/153450/1000x750/e0cf0ed31c/cottage-general_1_1.jpg',
          price: '2750 грн/доба',
          link: '/homes/cottage',
        },
        {
          title: 'Двомісний з балконом',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/2c04ff48a3/main_photo.jpg',
          price: '400 грн/доба',
          link: '/rooms/90265d8e-b286-417f-bdbf-6f215d613fab',
        },
        {
          title: 'Апартаменти на 4-6 чол',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/4b4551bc2c/room_3_1.jpg',
          price: '1650 грн/доба',
          link: '/rooms/a1a67b5f-1e69-4f7d-b716-cfbee7daf7aa',
        },
        {
          title: 'Двомісний з власним санвузлом',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/43d7eff6b3/room_1_1.jpg',
          price: '550 грн/доба',
          link: '/rooms/39d486f0-16b9-430b-8c5b-2e6341a9add9',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
