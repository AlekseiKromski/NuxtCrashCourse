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
        <h3>Post title</h3>

        <small>{{new Date().toLocaleString()}}</small>
      </header>

      <div
        class="post-body"
      >
        <img
          src="https://cms.finnair.com/resource/blob/653144/579f42b7348556e06040119aa977c330/berlin-sights-data.jpg?impolicy=crop&width=1698&height=955&x=0&y=88&imwidth=768"
          class="post-img"
          alt="">
      </div>

      <footer class="post-footer">
        <el-button
          round=""
          @click="openPost"
        >Открыть пост</el-button>

        <span>
        <i class="el-icon-message">12</i>
      </span>
      </footer>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "Post",
  methods: {
    openPost(){
      let id = 'test-id'
      this.$router.push(`/post/${id}`)
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
