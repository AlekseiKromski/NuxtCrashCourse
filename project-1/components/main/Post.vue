<template>
  <div class="post">
    <el-card
      shadow="hover"
      :body-style="{padding: 0}"
    >
      <header
        slot="header"
        class="post-header"
      >
        <h3>{{ post.title }}</h3>

        <small>{{new Date(post.date).toLocaleString()}}</small>
      </header>

      <div
        class="post-body"
      >
        <img
          :src="post.imageUrl"
          class="post-img"
          alt="">
      </div>

      <footer class="post-footer">
        <el-button
          round=""
          @click="openPost"
        >Открыть пост</el-button>

        <span>
        <i class="el-icon-message">{{post.comments.length}}</i>
      </span>
      </footer>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "Post",
  props: ['post'],
  methods: {
    openPost(){
      this.$router.push(`/post/${this.post._id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post{
    margin-bottom: 1.5rem;
  }

  .post-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-image{
    width: 100%;
    height: auto;
  }
  .post-body{
  }
  .post-footer{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }
</style>
