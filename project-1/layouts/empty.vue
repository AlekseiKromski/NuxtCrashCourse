<template>
  <div class="empty">
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: "empty",
  computed: {
    error(){
      return this.$store.getters.error;
    }
  },

  watch: {
    error(value){
      if(value.response.status !== 401){
        this.$message.error(value.response.data.msg)
      }
    }
  }
}
</script>

<style scoped>
  .empty{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 4rem;
  }
</style>
