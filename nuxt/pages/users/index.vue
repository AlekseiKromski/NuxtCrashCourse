<template>
  <section>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="user in users">
        <nuxt-link exact :to="'/users/' + user">{{user}}</nuxt-link>
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
  asyncData(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({users: [1,2,3,4,5]})
      }, 3000)
    });
  }
}
</script>

<style scoped>

</style>
