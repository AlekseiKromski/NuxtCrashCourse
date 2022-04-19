<template>
  <nav>
    <h1><nuxt-link to="/">SSR Blog</nuxt-link></h1>
  </nav>
</template>

<script>
export default {
  name: "AppNavigation"
}
</script>

<style lang="scss" scoped>
nav{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid #e6e6e6;
}
a{
  text-decoration: none;
  color: black;
}
</style>
