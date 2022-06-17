<template>
  <div class="container contacts-page">
    <Intro :data="content" :is-services="false"></Intro>

    <section class="box schema-doizdy">
      <h1>Схема доїзду</h1>

      <p>
        <span class="map-text-higlighted"
          >Навігатор Google неправильно поведе Вас до <b>Набережна 45</b>. Тому,
          будь ласка, ознайомтеся з схемою доїзду:
        </span>
      </p>
      <p>
        Вам потрібно доїхати до будинку
        <a
          target="_blank"
          href="https://www.google.com.ua/maps/place/51%C2%B029'12.1%22N+23%C2%B051'42.2%22E/@51.486696,23.8611725,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x727449145c37efbd!7e2!8m2!3d51.4866955!4d23.8617206?hl=uk"
          >Набережна 44</a
        >
        і навпроти буде <b>банер</b> та з'їзд вглибину висипаною дорогою.
      </p>

      <img
        src="https://a.storyblok.com/f/153450/1950x1344/cd75409946/schema-doizdy.jpg"
        alt="схема доїзду"
      />
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

.schema-doizdy {
  img {
    max-width: 1000px;
  }

  a {
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }
  }
}

.map-text-higlighted {
  background-color: #fdbbc6;
}
</style>
