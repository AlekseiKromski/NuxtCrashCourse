<template>
  <div class="error">
    <div class="error-content">
      <h1 class="error-title">404</h1>
      <nuxt-link to="/">back</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style lang="scss" scoped>
  .error{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .error-content{
    text-align: center;
  }

  .error-title{
    color: #a61010;
    margin-bottom: 1 rem;
  }
</style>
