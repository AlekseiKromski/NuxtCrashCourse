export const state = function (){
  return {
    error: null
  }

}

export const mutations = {
  setErrorMutation(state, error){
    state.error = error
  },

  clearErrorMutation(state){
    state.error = null;
  }

}


export const actions= {


}


export const getters = {

  error: state => state.error
}
