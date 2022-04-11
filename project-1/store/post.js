export const state = function (){


}

export const mutations = {

}


export const actions= {
  async fetchAdminPosts({commit}){
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            title: "post",
            date: new Date,
            views: 22,
            comments: [1,2],
            _id: 1,
          },
          {
            title: "post",
            date: new Date,
            views: 22,
            comments: [1,2],
            _id: 2,
          }
        ])
      }, 500)
    })
  },

  async remove({commit}, id){
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
}

}


export const getters = {

}
