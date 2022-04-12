export const state = function (){


}

export const mutations = {

}


export const actions= {
  async fetchAdminPosts({commit}){
    return await new Promise(resolve => {
      setTimeout(() => {

        resolve(posts)
      }, 500)
    })
  },

  async fetchAdminPostById({commit}, id){
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id == id));
      }, 500)
    })
  },

  async remove({commit}, id){
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
  },


  async editPost({commit}, post){
    return new Promise(resolve => {
      setTimeout(() => {
        for (let post_local of posts){
          if(post_local._id == post._id) {
            post_local.text = post.text
            break;
          }

        }
      },500)
    })
  },

  async createPost({commit}, post){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      },500)
    })
  }

}


export const getters = {

}

//moch data
let posts = [
  {
    title: "post",
    text: "null",
    date: new Date,
    views: 22,
    comments: [1,2],
    _id: 1,
  },
  {
    title: "post",
    text: "null",
    date: new Date,
    views: 22,
    comments: [1,2],
    _id: 2,
  }
]
