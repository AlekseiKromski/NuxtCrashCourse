<template>
  <div class="">
    <el-breadcrumb class="mb-2" separator="/">
      <el-breadcrumb-item to="/admin/list">Список</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{this.$route.params.id}}</a></el-breadcrumb-item>
    </el-breadcrumb>
<!--    <h1>{{post.title}}</h1>-->


    <h3>Редактировать</h3>
    <el-form @submit.native.prevent="onSubmit" style="width: 600px;" :model="controls" :rules="rules" ref="form">
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text"/>
      </el-form-item>


      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span>
            {{new Date(post.date).toLocaleString()}}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>
            {{post.views}}
          </span>
        </small>
      </div>

      <el-form-item >
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >Созранить</el-button>
      </el-form-item>
    </el-form>




  </div>
</template>

<script>
export default {
  name: "_id",
  layout: "admin",
  middleware: ['admin-auth'],
  head: function() {
    return {
      title: this.post.title
    }
  },
  validate({params}){
    return !!params.id
  },
  async asyncData({store, params}){
    const post = await store.dispatch('post/fetchAdminPostById', params.id);
    return {post};
  },
  data(){
    return {
      loading:false,
      controls: {
        text: "",
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ],

      }
    }
  },
  mounted() {
    const {message} = this.$route.query;

    switch (message){
      case 'login':
        this.$message.info('Надо авторезироваться')
        break;
      case 'logout':
        this.$message.info('Вы вышли')
        break
    }

  },
  methods: {
    onSubmit(){
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          //Feature: upload to backend
          try{
            const formData = {
              text: this.controls.text,
              _id: this.post._id
            }
            await this.$store.dispatch('post/editPost', formData)

            this.$message.success('Вы успешно отредактировали пост');

            this.$router.push('/admin/list');

          }catch (e){
            this.loading = false;
          }
        } else {
          this.loading = false;
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.mr{
  margin-right: 2rem;
}
</style>
