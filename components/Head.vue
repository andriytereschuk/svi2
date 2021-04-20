<template>
  <header>
    <div class="top">
      <div class="container">
        <div class="row align-center justify-between">
          <nuxt-link to="/">
            <img class="logo" src="images/logo.png" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <nav>
      <div class="container">
        <ul class="menu">
          <li v-for="(item, index) of menu" :key="index">
            <nuxt-link :to="item.href" class="menu-item">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      menu: [
        {
          name: 'Житло',
          href: '/homes',
        },
        {
          name: 'Про нас',
          href: '/about-svilake',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/vars.scss';
$navHeight: 66px;

.top {
  height: 60px;
  background-color: #fff;
}

.logo {
  height: 38px;
}

nav {
  background-color: $blue;
  height: $navHeight;
  overflow: hidden;
}

.menu {
  display: flex;
}

.menu {
  li + li {
    margin-left: 20px;
  }
}

.menu-item {
  line-height: $navHeight;
  color: #fff;
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    display: none;
    top: -1px;
    left: 50%;
    position: absolute;
    margin-left: -8.5px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
  }

  &:hover {
    &:before {
      display: block;
    }
  }

  &.nuxt-link-active {
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      bottom: -1px;
      left: 50%;
      position: absolute;
      margin-left: -8.5px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #eee;
    }
  }
}
</style>
