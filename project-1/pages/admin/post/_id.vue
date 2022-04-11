<template>
  <div class="">
    <el-breadcrumb class="mb-2" separator="/">
      <el-breadcrumb-item to="/admin/list">Список</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{this.$route.params.id}}</a></el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{this.$route.params.id}}</h1>

  </div>
</template>

<script>
export default {
  name: "_id",
  layout: "admin",
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>
