export const state = () => {
  return {
    users: []
  }
}

export const mutations = {
  setUsers(state,users){
    state.users = users;
  }
};

export const getters = {
  users: (state) => {
    return state.users;
  }
}

export const actions = {
  async fetchUsers({commit}) {
    //nuxt axios already return data field as default

    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', users);
  },

  async fetchUserById({}, userId){
    try{
      let user = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      return user;
    }catch (e){
      error(e)
    }
  }
}
