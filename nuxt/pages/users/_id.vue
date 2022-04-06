<template>
  <section>
    <h1>{{user.name}}</h1>
    <hr>
    {{user.email}}
  </section>
</template>

<script>
export default {
  name: "_id",
  validate({params}){
    return /^\d+$/.test(params.id)
  },
  async asyncData({params, error, store}){
    let user = await store.dispatch('users/fetchUserById', params.id)
    return {user}
  }
}
</script>

<style scoped>

</style>
