<template>
  <el-row type="flex" justify="center" >
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <post
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import Post from '../components/main/Post'
export default {
  head :{
    title: `Главная | ${process.env.appName}`
  },
  name: "index",
  components: {
    'post': Post
  },
  async asyncData({store}){
    const posts = await store.dispatch('post/fetch')

    return {
      posts
    }
  }
}
</script>

<style scoped>

</style>
