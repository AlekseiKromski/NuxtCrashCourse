export const state = function (){


}

export const mutations = {

}


export const actions= {
  async fetchAdminPosts({commit}){
    try{

      let posts = await this.$axios.get('/api/post/admin/');

      return posts;
    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }
  },

  async fetch({commit}){
    try{

      let posts = await this.$axios.get('/api/post/');
      return posts.data;
    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }
  },

  async fetchById({commit}, id){
    try{
      let post = await this.$axios.get('/api/post/' + id);
      return post.data;
    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }
  },

  async fetchAdminPostById({commit}, id){
    try{
      let post = await this.$axios.get('/api/post/admin/' + id);
      return post;
    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }
  },

  async remove({commit}, id){
    try{
      let post = await this.$axios.delete('/api/post/admin/' + id);

      return post;
    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }

  },


  async editPost({commit}, post){
    await this.$axios.put('/api/post/admin/' + post._id, {text: post.text});
    for (let post_local of posts){
      if(post_local._id == post._id) {
        post_local.text = post.text
        break;
      }

    }

  },

  async createPost({commit, dispatch}, {title, text, image}){
    try{
      let fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image);
      return await this.$axios.post('/api/post/admin', fd);

    }catch (e){
      commit('setErrorMutation', e, {root: true})
    }
  },

  async addView({commit}, post){
    try{
      await this.$axios.$put('/api/post/add/view/' + post._id, {
        views: post.views
      })

    }catch (e){
      console.log(e)
      commit('setErrorMutation', e, {root: true})
    }
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
