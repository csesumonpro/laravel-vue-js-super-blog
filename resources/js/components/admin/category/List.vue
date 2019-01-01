<template>
    <div>
        <section class="content">
            <div class="row justify-content-around" >
                <div class="col-8 ">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-category" style="color:#fff"> Add Category</router-link>
                                </button>
                            </div>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>
                                        <select name="" id="" v-model="selected" @change="deleteSelected">
                                            <option disabled value="">Select</option>
                                            <option value="" >Delete Selected</option>
                                        </select><br>
                                        <input id="select_all" @click.prevent = "selectAll" type="checkbox" v-model="allSelected"/>
                                        <span v-if="allSelected==false">Check All</span>
                                        <span v-else>Uncheck all</span>
                                    </th>

                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Actions</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="(category,index) in getallCategory" :key="category.id">                 <td> <input type="checkbox" v-model="checkdelete" :value="category.id"></td>
                                    <td>{{index+1}}</td>
                                    <td>{{category.cat_name}}</td>
                                    <td>{{category.created_at | timeformat}}</td>
                                    <td>
                                        <router-link :to="`/edit-category/${category.id}`">Edit</router-link>
                                        <a href="" @click.prevent = "deletecategory(category.id)" >Delete</a>
                                    </td>
                                </tr>
                                </tbody>


                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>

                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
           return{
               checkdelete:[],
               selected:'',
               allSelected:false
           }
        },
        mounted(){
            this.$store.dispatch("allCategory")
        },
        computed:{
           getallCategory(){
            return this.$store.getters.getCategory
           }
        },
        methods:{
            deletecategory(id){
               axios.get('/category/'+id)
                   .then(()=>{
                       this.$store.dispatch("allCategory")
                       toast({
                           type: 'success',
                           title: 'Category Deleted successfully'
                       })
                   })
                   .catch(()=>{

                   })
            },
            deleteSelected(){
               axios.get('/categorydelete/'+this.checkdelete)
                   .then(()=>{
                       this.checkdelete  = []
                       this.$store.dispatch("allCategory")
                       toast({
                           type: 'success',
                           title: 'Category Deleted successfully'
                       })


                })

            },
            selectAll(){
                if(this.allSelected==false){
                    this.allSelected = true
                    for (var category in this.getallCategory) {
                        this.checkdelete.push(this.getallCategory[category].id);
                    }
                    console.log(this.checkdelete)
                }else{
                    this.allSelected = false
                    this.checkdelete = []
                }
            }
        }
    }
</script>

<style scoped>
</style>