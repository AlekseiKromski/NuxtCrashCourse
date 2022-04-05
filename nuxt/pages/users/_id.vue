<template>
  <section>
    <h1>User with id - {{$route.params.id}} \ {{user.name}}</h1>
  </section>
</template>

<script>
export default {
  name: "_id",
  validate({params}){
    return /^\d+$/.test(params.id)
  },
  asyncData({params}){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({user: {name: "test", id: params.id}})
      },1500)
    })
  }
}
</script>

<style scoped>

</style>
