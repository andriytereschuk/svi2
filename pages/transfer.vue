<template>
  <div class="container">
    <div class="tr-main">
      <div class="tr-text">
        <h1>Трансфер по Волині та міжобласні поїздки</h1>

        <p>
          Нерегулярні пасажирські перевезення комфортним автобусом на 22 місця
        </p>
      </div>
    </div>

    <div class="tr-content">
      <p>
        Перевезення дитячих та спортивних груп, туристичні поїздки, доїзд до
        місць відпочинку, обслуговування різних заходів: екскурсій, весілля,
        день народжень, розвозка працівників. <br />
        Водії з багаторічним досвідом. З нами надійно, зручно та безпечно!
      </p>
    </div>

    <div class="box">
      <div class="tr-more">Щоб дізнатися більше - виберіть ваш регіон:</div>

      <ul>
        <li v-for="(item, index) of items" :key="index">
          <nuxt-link :to="item.href" class="tr-item">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Замовити автобус з Шацьк, Любомль',
          href: '/transfer-shatsk-lyuboml',
        },
        {
          name: 'Замовити трансфер з Володимир, Нововолинськ',
          href: '/transfer-volodymyr-novovolynsk',
        },
        {
          name: 'Автобус на замовлення з Луцьк, Ковель, Турійськ, Ратно',
          href: '/transfer-lutsk-kovel',
        },
        {
          name: 'Замовити автобус Львів, Червоноград, Великі Мости, Броди',
          href: '/transfer-lviv-chervonohrad',
        },
      ],
    }
  },
  head: {
    title:
      'Нерегулярні пасажирські перевезення бусом по Волині та міжобласні поїздки',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Перевезення дитячих та спортивних груп, обслуговування різних заходів, оренда атобуса',
      },
      {
        property: 'og:title',
        content: 'Трансфер | Волинь | Міжобласні поїздки',
      },
      {
        property: 'og:url',
        content: 'https://www.svilake.com/transfer',
      },
      {
        property: 'og:image',
        content:
          'https://a.storyblok.com/f/153450/1000x706/6b59f8148e/bus-front-left.jpg',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.svilake.com/transfer',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars.scss';

.tr-main {
  background-image: url('https://a.storyblok.com/f/153450/1133x569/d54cb88284/transfer-volyn.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;

  @media #{$small} {
    height: 250px;
  }
}

.tr-text {
  position: absolute;
  top: 25px;
  left: 25px;
  bottom: 25px;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 26px;
    line-height: 30px;
  }

  p {
    padding: 20px 0 40px;
    font-size: 20px;
    line-height: 22px;
    font-weight: 300;
  }

  @media #{$small} {
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;

    h1 {
      font-size: 22px;
      line-height: 26px;
    }

    p {
      font-size: 19px;
    }
  }
}

.tr-content {
  padding-top: 30px;
  margin-bottom: 20px;

  p {
    font-size: 18px;
    line-height: 24px;
    color: #333;
  }

  @media #{$small} {
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
}

.tr-more {
  font-weight: bold;
  font-size: 20px;
  padding: 30px 0;

  @media #{$small} {
    font-size: 18px;
  }
}

ul {
  list-style: square;
  margin-left: 40px;
  margin-bottom: 20px;

  @media #{$small} {
    margin-left: 20px;
  }

  li + li {
    margin-top: 20px;
  }

  a {
    font-size: 18px;
    font-weight: 300;
    text-decoration: underline;
    color: $blue;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
