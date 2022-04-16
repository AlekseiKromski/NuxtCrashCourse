export default function({$axios, redirect, store}){

  $axios.interceptors.request.use(request => {
    const token = store.getters['auth/token'];
    if(
      token &&
      !request.headers.common['Authorization']
    ){
      console.log('ee')
      request.headers.common.Authorization = 'Bearer ' + token
    }
    return request;
  })


  $axios.onError(error => {
    if(error.response){
      if(error.response.status === 401){
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      }
    }
  })
}
