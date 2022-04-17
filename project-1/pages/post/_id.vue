<template>
  <article class="post">
    <header>
      <div class="post-title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
      </div>
      <div class="post-info">
        <i class="el-icon-time"></i>
        <small>{{new Date(post.date).toLocaleString()}}</small>
        <small>
          <i class="el-icon-view"></i>
          {{ post.views }}
        </small>
      </div>
      <div class="post-image">
        <img :src="post.imageUrl" alt="">
      </div>
    </header>
    <main>
      <vue-markdown>{{post.text}}</vue-markdown>
    </main>

    <footer>
      <comment-form
        @created="createCommentHandler"
        v-if="canAddComment"
      ></comment-form>
      <div class="comments" v-if="post.comments.length !== 0">
        <comment
          v-for="comment in post.comments"
          :key="comment"
          :comment="comment"
        />
      </div>

      <div class="text-center" v-else>
        No comments
      </div>
    </footer>
  </article>
</template>

<script>
import Comment from '@/components/main/Comment'
import CommentForm from '@/components/main/CommentForm'
import VueMarkdown from 'vue-markdown'
export default {
  name: "_id",
  components: {
    'comment': Comment,
    'comment-form': CommentForm,
    'vue-markdown': VueMarkdown
  },
  validate({params}){
    return !!params.id;
  },
  data() {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler(){
      this.canAddComment = false;
    }
  },
  async asyncData({store, params}){
    let post = await store.dispatch('post/fetchById', params.id);
    let views = await store.dispatch('post/addView', post);
    post.views++;
    console.log(views)
    return {
      post
    }
  },
}
</script>

<style scoped lang="scss">
  .post{
    max-width: 600px;
    margin: 0 auto;
  }

  .post-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }

  .post-info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }

  .post-image img{
    width: 100%;
    height: auto;
  }

  .post-header{
    margin-bottom: 1.5rem;
  }


</style>
