<template>
  <div class="">

    <el-container>
      <el-header>
        <app-navigation/>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer/>
    </el-container>
  </div>
</template>

<script>
import AppNavigation from '~/components/main/AppNavigation';
export default {
  name: "default",
  components: {
    AppNavigation
  }
}
</script>

<style scoped>

</style>
