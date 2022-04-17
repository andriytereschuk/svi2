<template>
  <header>
    <div class="container">
      <nav class="row justify-between align-center">
        <nuxt-link to="/">
          <img class="logo" src="/images/logo.svg" alt="" />
        </nuxt-link>

        <ul class="menu">
          <li v-for="(item, index) of menu" :key="index">
            <nuxt-link :to="item.href" class="menu-item">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('nav', ['menu']),
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';

header {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid silver;
}

.logo {
  width: 100px;
}

.menu {
  display: flex;
  font-size: 13px;

  li + li {
    margin-left: 43px;
  }

  li {
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -21px;
      top: 2px;
      height: 16px;
      width: 1px;
      background-color: #cacaca;
    }

    &:first-child::before {
      display: none;
    }
  }

  a {
    position: relative;

    &::after {
      content: '';
      display: none;
      position: absolute;
      bottom: -4px;
      height: 2px;
      width: 100%;
      background-color: #000;
    }

    &:hover::after {
      display: block;
    }
  }
}

// $navHeight: 66px;

// .top {
//   height: 60px;
//   background-color: #fff;
// }

// .logo {
//   height: 38px;
// }

// nav {
//   background-color: $blue;
//   height: $navHeight;
//   overflow: hidden;
// }

// .menu {
//   display: flex;
// }

// .menu {
//   li + li {
//     margin-left: 20px;
//   }
// }

// .menu-item {
//   line-height: $navHeight;
//   color: #fff;
//   position: relative;
//   display: inline-block;

//   &:before {
//     content: '';
//     display: none;
//     top: -1px;
//     left: 50%;
//     position: absolute;
//     margin-left: -8.5px;
//     width: 0;
//     height: 0;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-top: 10px solid #fff;
//   }

//   &:hover {
//     &:before {
//       display: block;
//     }
//   }

//   &.nuxt-link-active {
//     pointer-events: none;

//     &:after {
//       content: '';
//       display: block;
//       bottom: -1px;
//       left: 50%;
//       position: absolute;
//       margin-left: -8.5px;
//       width: 0;
//       height: 0;
//       border-left: 10px solid transparent;
//       border-right: 10px solid transparent;
//       border-bottom: 10px solid #eee;
//     }
//   }
// }
</style>
