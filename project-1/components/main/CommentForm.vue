<template>
  <div class="comment">
    <h1>Добавить комментарий</h1>
    <el-form @submit.native.prevent="onSubmit" :model="controls" :rules="rules" ref="form">
      <el-form-item label="Имя" prop="name">
        <el-input v-model="controls.name"/>
      </el-form-item>
      <el-form-item label="Текст" prop="text">
        <el-input type="textarea" resize="none" rows="2" v-model="controls.text"/>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >Добавить комментарий</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  props: ['postId'],
  data(){
    return {
      loading: false,
      controls: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
        ],
        text: [
          { required: true, message: 'Текст не долже быть пустым', trigger: 'blur' },
        ],

      }
    }
  },
  methods: {
    onSubmit(){
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          }

          //Feature: upload to backend
          try{
            const comment = await this.$store.dispatch('comment/create', formData)


            this.$message.success('Коментарий был добавлен');
            this.$emit('created', comment);
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

<style lang="scss" scoped>
  .comment{
    margin-top: 1rem;
  }
</style>
