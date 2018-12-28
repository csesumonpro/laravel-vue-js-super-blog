export default {
    state:{
        category:[],
        post:[],
        blogpost:[],
        singlepost:[]
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getblogPost(state){
            return state.blogpost
        },
        singlepost(state){
            return state.singlepost
        }

    },
    actions:{
        allCategory(context){
           axios.get('/category')
               .then((response)=>{
                   context.commit('categoreis',response.data.categories)
               })
        },
        gelAllPost(context){
            axios.get('/post')
                .then((response)=>{
                    console.log(response.data)
                    context.commit('allpost',response.data.posts)
                })
        },
        getblogPost(context){
            axios.get('/blogpost')
                .then((response)=>{
                    // console.log(response.data)
                    context.commit('getblogPost',response.data.posts)
                })
        },
        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
                .then((response)=>{
                    context.commit('siglePost',response.data.post)
                })
        }
    },
    mutations:{
        categoreis(state,data){
            return state.category = data
        },
        allpost(state,payload){
            return state.post = payload
        },
        getblogPost(state,payload){
            return state.blogpost = payload
        },
        siglePost(state,payload){
            return state.singlepost = payload
        }

    }
}