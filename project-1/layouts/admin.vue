<template>
  <div class="admin">
    <el-container style="height: 100%">
      <el-aside width="250px">
        <admin-aside/>
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AdminAside from '@/components/admin/AdminAside'
export default {
  name: "admin",
  components: {
    'admin-aside':AdminAside
  }
}
</script>

<style lang="scss" scoped>
  .admin{
    width: 100%;
    height: 100vh;
  }
  .el-container{
    height: 100%;
  }
</style>
