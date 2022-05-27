<template>
  <header :class="{ active: isMenuOpened }">
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

        <a class="mobile-menu" @click.prevent="openMenu">Меню сайту</a>
        <a class="mobile-menu-close" @click.prevent="closeMenu">&#10005;</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    isMenuOpened: false,
  }),
  computed: {
    ...mapState('nav', ['menu']),
  },
  watch: {
    $route() {
      this.isMenuOpened = false
    },
  },
  methods: {
    openMenu() {
      this.isMenuOpened = true
    },
    closeMenu() {
      this.isMenuOpened = false
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';

header {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid silver;
  position: relative;

  &.active {
    position: fixed;
    height: 100vh;
    z-index: 100;
    left: 0;
    right: 0;
    border: none;

    .mobile-menu-close {
      display: block;
    }

    nav {
      height: 50px;
    }

    .mobile-menu {
      display: none;
    }

    .menu {
      position: absolute;
      flex-direction: column;
      padding-right: 0;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 50px;
      justify-content: center;
      align-items: center;

      a {
        text-transform: uppercase;
        font-size: 14px;
      }

      li + li {
        margin-top: 30px;
      }

      li {
        display: block;

        &::before {
          display: none;
        }
      }
    }
  }
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

.mobile-menu {
  position: absolute;
  right: 2px;
  padding: 10px;
  display: none;
}

.mobile-menu-close {
  position: absolute;
  right: 10px;
  display: none;
  font-size: 22px;
  padding: 10px;
}

@media #{$small} {
  .menu {
    padding-right: 90px;

    li {
      display: none;

      a {
        padding: 10px;

        &::after {
          bottom: -7px;
        }
      }

      &:first-child {
        display: block;
      }
    }

    li + li {
      margin: 0;
    }
  }

  .mobile-menu {
    display: block;
    font-size: 13px;
  }
}
</style>
