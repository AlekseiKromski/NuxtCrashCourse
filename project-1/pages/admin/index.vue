<template>
  <h1>admin</h1>
</template>

<script>
export default {
  name: "index",
  layout: "admin",
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>
