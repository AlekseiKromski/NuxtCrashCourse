<template>
  <section>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link exact :to="'/users/' + user.id">
          {{user.name}} <b>({{user.email}})</b>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: "users",
  data() {
    return {
      title: "Users"
    }
  },
  computed: {
    users({}) {
      return this.$store.getters['users/users'];
    }
  },
  async asyncData({store, error}){

    try{
      if(store.getters['users/users'].length ===0){
        await store.dispatch('users/fetchUsers');
        return {}
      }
    }catch (e ){
      console.log(e)
      error(e)
    }

  }
}
</script>

<style scoped>

</style>
