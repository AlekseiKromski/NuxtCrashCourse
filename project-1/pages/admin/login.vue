<template>
  <el-card
    shadow="always"
    style="width: 500px"
  >
    <h3>Логин</h3>
    <el-form @submit.native.prevent="onSubmit" :model="controls" :rules="rules" ref="form">
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"/>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password"/>
      </el-form-item>
      <el-form-item >
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >Войти</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  head :{
    title: `Вход | ${process.env.appName}`
  },
  name: "login",
  layout: "empty",
  data(){
    return {
      loading:false,
      controls: {
        login: "",
        password: ""
      },
      rules: {
        login: [
          { required: true, message: 'Логин не должен быть пустым', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Пароль не долже быть пустым', trigger: 'blur' },
          {min: 6, message: "Пароль должен быть не менее 6 символов", trigger: "blur"}
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
      case 'session':
        this.$message.warning('Сессия истекла')
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
              login: this.controls.login,
              password: this.controls.password,
            }
            await this.$store.dispatch('auth/login', formData)

            this.$message.success('Вы успешно вошли');

            this.$router.push('/admin');

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
