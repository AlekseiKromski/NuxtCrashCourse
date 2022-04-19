<template>
  <div class="">
    <h1>Создать пользователя</h1>
    <el-form @submit.native.prevent="onSubmit" :model="controls" :rules="rules" ref="form">
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"/>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password"/>
      </el-form-item>
      <el-form-item >
        <el-button
          type="success"
          round
          native-type="submit"
          :loading="loading"
        >Создать</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "user",
  layout: "admin",
  middleware: ['admin-auth'],
  head :{
    title: `Пользователь | ${process.env.appName}`
  },
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
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          //Feature: upload to backend
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            }
            await this.$store.dispatch('auth/createUser', formData)

            this.$message.success('Вы успешно создали пользователя');

            this.controls.password = ""
            this.controls.login = ""
            this.loading = false;

          } catch (e) {
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
form{
  width: 600px;
}
</style>
