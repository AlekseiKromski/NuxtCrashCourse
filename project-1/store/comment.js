
export const state = function (){
  return {

  }
}

export const mutations = {


}


export const actions= {
  async create ({commit}, data){
    try{
      const comment = await this.$axios.$post('/api/comment/', data);
      return comment

    }catch (e){
      commit('setErrorMutation', e, {root: true})
    }
  }
}


export const getters = {

}

