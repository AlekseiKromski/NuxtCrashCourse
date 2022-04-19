<template>
  <el-card class="comment">
    <div class="comment-header">
      <small>{{ comment.name }}</small>
      <small><i class="el-icon-time"></i> {{comment.date | date}}</small>
    </div>
    <div class="comment-text">
      {{comment.text}}
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
