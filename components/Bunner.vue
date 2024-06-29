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
          price: '4000 грн/доба',
          link: '/homes/cottage',
        },
        {
          title: 'Двомісні',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/1e5aba2ac8/second_floor_room_4_3.jpg',
          price: 'від 500 грн/доба',
          link: '/categories/double',
        },
        {
          title: 'Два + один',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1200x801/e1348baf70/2024-1.jpeg',
          price: 'від 750 грн/доба',
          link: '/categories/triple',
        },
        {
          title: 'Апартаменти на 4-6 чол',
          info: '',
          image:
            'https://a.storyblok.com/f/153450/1000x750/4b4551bc2c/room_3_1.jpg',
          price: '2400 грн/доба',
          link: '/rooms/a1a67b5f-1e69-4f7d-b716-cfbee7daf7aa',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
