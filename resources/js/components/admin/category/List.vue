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
                                <th>Sl</th>
                                <th>Category Name</th>
                                <th>Actions</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Category Name </td>
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
        name: "List"
    }
</script>

<style scoped>

</style>