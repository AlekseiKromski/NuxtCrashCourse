<template>
  <div class="">
    <h3>Создать</h3>
    <el-form @submit.native.prevent="onSubmit" style="width: 600px;" :model="controls" :rules="rules" ref="form">

      <el-form-item label="Заглавие" prop="title">
        <el-input  v-model.trim="controls.title"/>
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model="controls.text"/>
      </el-form-item>

      <el-form-item >
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >Создать</el-button>
      </el-form-item>

      <el-button type="text" @click="dialogVisible = true">Предосмотр</el-button>

      <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown>
        </div>

      </el-dialog>
    </el-form>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: "create",
  layout: "admin",
  middleware: ['admin-auth'],
  components: {
    'vue-markdown': VueMarkdown
  },
  data(){
    return {
      loading:false,
      dialogVisible: false,
      controls: {
        text: "",
        title: ""
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ],
        title: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' },
        ],
      }
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
              title: "Post"
            }
            await this.$store.dispatch('post/createPost', formData)

            this.$message.success('Вы успешно создали пост');

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

</style>
