export default {
    state:{
        category:[],
    },
    getters:{
        getCategory(state){
            return state.category
        },

    },
    actions:{
        allCategory(context){
           axios.get('/category')
               .then((response)=>{
                   context.commit('categoreis',response.data.categories)
               })
        }
    },
    mutations:{
        categoreis(state,data){
            return state.category = data
        }

    }
}