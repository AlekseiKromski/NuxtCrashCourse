export const state = function (){
  return {
    token: true,

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
    try{
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("mock-token");
        },500)
      })
      dispatch('setToken', token);
    }catch (e){
      commit('setErrorMutation', e, {root: true})
      throw e;
    }
  },

  async createUser({commit}, user){
    try{
      console.log('Create user')
    }catch (e){
      commit('setErrorMutation', e, {root: true})
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
