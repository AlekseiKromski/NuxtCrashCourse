<template>
  <el-row type="flex" justify="center" >
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <post
        v-for="number in 19"
        :key="number"
      />
    </el-col>
  </el-row>
</template>

<script>
import Post from '../components/main/Post'
export default {
  head :{
    title: "Main"
  },
  name: "index",
  components: {
    'post': Post
  }
}
</script>

<style scoped>

</style>
