<template>
    <div>
        <section class="content">
            <div class="row justify-content-around" >
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/" style="color:#fff"> Add Post</router-link>
                                </button>
                            </div>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>

                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="(post,index) in allpost">
                                    <td>{{index+1}}</td>
                                    <td>User Name</td>
                                    <td>Category Name</td>
                                    <td>{{post.title}}</td>
                                    <td>{{post.description}}</td>
                                    <td><img :src="post.photo" alt="" width="40" height="50"></td>
                                    <td>
                                        <a href="">Edit</a>
                                        <a href="">Delete</a>

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
        mounted(){
            this.$store.dispatch('gelAllPost')
        },
        computed:{
            allpost(){
                return this.$store.getters.getAllPost
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>