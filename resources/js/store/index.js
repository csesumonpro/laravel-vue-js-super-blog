export default {
    state:{
        category:[],
        post:[]
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
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
        }
    },
    mutations:{
        categoreis(state,data){
            return state.category = data
        },
        allpost(state,payload){
            return state.post = payload
        }

    }
}