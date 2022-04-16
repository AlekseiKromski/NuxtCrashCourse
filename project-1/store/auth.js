export const state = function (){
  return {
    token: "df",

  }
}

export const mutations = {

  setTokenMutation(state, token){
    state.token = token;
  },

  logoutMutation(state){
    state.token = null;
  }

}


export const actions= {
  async login({commit, dispatch}, formData){
    try{
      const {token} = await this.$axios.$post('/api/auth/admin/login', formData)
      console.log(token)
      dispatch('setToken', token);
    }catch (e){
      commit('setErrorMutation', e.response.data.msg, {root: true})
      throw e;
    }
  },

  async createUser({commit}, user){
    try{
      await this.$axios.post('/api/auth/admin/create', user);

    }catch (e){
      commit('setErrorMutation', e.response.data.msg, {root: true})
      throw e;
    }
  },
  setToken({commit}, token){
    commit('setTokenMutation', token);
  },

  logout({commit}){
    commit('logoutMutation')
  }
}


export const getters = {
  isAuth: (state) => {
    return Boolean(state.token);
  }
}
