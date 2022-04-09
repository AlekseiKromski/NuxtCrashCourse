<template>
  <el-card class="comment">
    <div class="comment-header">
      <small>Aleksei</small>
      <small><i class="el-icon-time"></i> {{new Date().toLocaleString()}}</small>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet, consequuntur delectus distinctio dolore facilis itaque nesciunt nisi non omnis, quam ratione similique ut. Asperiores dolorum ducimus harum ratione soluta.
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment'],
  name: "Comment"
}
</script>

<style scoped>
  .comment{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .comment-header{
    display: flex;
    justify-content: space-between;
  }

  .comment-text{
    white-space: pre-line;
  }
</style>
