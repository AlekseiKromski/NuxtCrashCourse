import Cookie from 'cookie';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode'
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
  async login({commit, dispatch}, formData){
    try{
      const {token} = await this.$axios.$post('/api/auth/admin/login', formData)
      dispatch('setToken', token);
    }catch (e){
      commit('setErrorMutation', e, {root: true})
      throw e;
    }
  },

  async createUser({commit}, user){
    try{
      await this.$axios.post('/api/auth/admin/create', user);

    }catch (e){
      commit('setErrorMutation', e, {root: true})
      throw e;
    }
  },

  setToken({commit}, token){
    this.$axios.setToken(token, 'Bearer')
    commit('setTokenMutation', token);
    Cookies.set('jwt-token', token)
  },

  logout({commit}){
    this.$axios.setToken(false)

    commit('logoutMutation')
    Cookies.remove('jwt-token')
  },

  autoLogin({dispatch}){
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || "") || {}
    const token = cookies['jwt-token'];
    if(tokenValid(token)){
      dispatch('setToken', token)
    }else{
      dispatch('logout')
    }

  }
}


export const getters = {
  isAuth: (state) => {
    return Boolean(state.token);
  },
  token: (state) => {
    return state.token
  }
}

function tokenValid(token){
  if(!token){
    return false;
  }

  const jwtData = jwtDecode(token) || {}
  const exp = jwtData.exp || 0
  return (new Date().getTime() / 1000) < exp

}
