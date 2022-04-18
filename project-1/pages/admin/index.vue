<template>

</template>

<script>
export default {
  name: "index",
  layout: "admin",
  middleware: ['admin-auth'],
  mounted() {
    this.renderChart()
  },
}
</script>

<style scoped>

</style>
