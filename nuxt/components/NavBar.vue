<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">NuxtJs</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" aria-current="page" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link no-prefetch exact active-class="active" class="nav-link" aria-current="page" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/users">users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/login">login</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
