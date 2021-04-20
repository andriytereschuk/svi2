<template>
  <div>
    <Head />
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: Roboto, -apple-system, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  line-height: 24px;
  background-color: #eee;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.row {
  display: flex;
  height: 100%;
}

.align-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}
</style>
