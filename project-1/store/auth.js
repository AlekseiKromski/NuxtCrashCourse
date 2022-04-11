export const state = function (){
  return {
    token: null,

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
  async login({commit, dispatch}, fromData){
    const token = await new Promise(resolve => {
      setTimeout(() => {
        resolve("mock-token");
      },500)
    })
    dispatch('setToken', token);
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
