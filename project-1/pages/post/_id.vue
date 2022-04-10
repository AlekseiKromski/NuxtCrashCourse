<template>
  <article class="post">
    <header>
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
      </div>
      <div class="post-info">
        <i class="el-icon-time"></i>
        <small>{{new Date().toLocaleString()}}</small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="https://cms.finnair.com/resource/blob/653144/579f42b7348556e06040119aa977c330/berlin-sights-data.jpg?impolicy=crop&width=1698&height=955&x=0&y=88&imwidth=768" alt="">
      </div>
    </header>
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa doloribus enim maiores odio praesentium totam ullam. A asperiores eos ipsum natus omnis repellat rerum, tenetur vero. Beatae, distinctio.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, aut commodi deserunt fugiat illum incidunt ipsa minima modi nulla odio officiis quo rerum sapiente similique sint totam, voluptate voluptatum.</p>
    </main>

    <footer>
      <comment-form
        @created="createCommentHandler"
        v-if="canAddComment"
      ></comment-form>
      <div class="comments" v-if="false">
        <comment
          v-for="comment in 4"
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
export default {
  name: "_id",
  components: {
    'comment': Comment,
    'comment-form': CommentForm
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
  }
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
