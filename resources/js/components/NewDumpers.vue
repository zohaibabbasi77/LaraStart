<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Dumpers Table</h3>

                <div class="card-tools">
                  <button class="btn btn-success" @click="newDumperModal">Add New 
                      <i class="fas fa-user-plus fa-fw"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Driver Name</th>
                      <th>Driver CNIC</th>
                      <th>D.Plate-No</th>
                      <th>D.Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1234</td>
                      <td>Nouman</td>
                      <td>13101-2345-604-4</td>
                      <td>3536</td>
                      <td>12</td> 
                      <td>
                        <button class="btn btn-success">Detail
                          <i class="fas fa-info-circle fa-fw"></i>
                        </button>
                      </td>                     
                      <td>
                          <a href="#">
                              <i class="fa fa-edit"></i>
                          </a>
                          /
                          <a href="#">
                              <i class="fa fa-trash red"></i>
                          </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
      </div>


        <!-- Modal -->
          <div class="modal fade" id="addNewdumper" tabindex="-1" role="dialog" aria-labelledby="addNewdumper" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNewdumperLabel">Add New</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
              <form>
                <div class="modal-body">
                   <div class="form-group">
                      <input v-model="form.name" type="text" name="name"
                        placeholder="Name"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                      <has-error :form="form" field="name"></has-error>
                   </div>

                   <!-- <div class="form-group">
                      <input v-model="form.email" type="email" name="email"
                        placeholder="Email Address"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                      <has-error :form="form" field="email"></has-error>
                   </div> -->

                   <div class="form-group">
                      <input v-model="form.phonenumber" type="text" name="phonenumber"
                        placeholder="Phone No"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('phonenumber') }">
                      <has-error :form="form" field="phonenumber"></has-error>
                   </div>

                   <div class="form-group">
                      <input v-model="form.cnic" type="text" name="cnic"
                        placeholder="CNIC"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('cnic') }">
                      <has-error :form="form" field="cnic"></has-error>
                   </div>

                  <div class="form-group">
                      <select v-model="form.city" name="city" id="city"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('city') }">
                        <option value="">Select City</option>
                        <option value="admin">Abbottabad</option>
                        <option value="user">Mansehra</option>
                        <option value="author">Haripur</option>
                      </select>
                      <has-error :form="form" field="city"></has-error>
                   </div>


                   <div class="form-group">
                      <input v-model="form.dumperplateno" type="text" name="dumperplateno"
                        placeholder="Plate No"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('dumperplateno') }">
                      <has-error :form="form" field="dumperplateno"></has-error>
                   </div>

                   <div class="form-group">
                      <input v-model="form.dumpersize" type="text" name="dumpersize"
                        placeholder="Dumpersize"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('dumpersize') }">
                      <has-error :form="form" field="dumpersize"></has-error>
                   </div>

                   <div class="form-group">
                      <input v-model="form.dumperwheels" type="text" name="dumperwheels"
                        placeholder="Dumper Wheels"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('dumperwheels') }">
                      <has-error :form="form" field="dumperwheels"></has-error>
                   </div>

                   
                   <div class="form-group">
                      <select v-model="form.type" name="type" id="type"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                        <option value="">Select Dumper Type</option>
                        <option value="admin">Local</option>
                        <option value="user">Private</option>
                      </select>
                      <has-error :form="form" field="type"></has-error>
                   </div>

                   <div class="form-group">
                      <input v-model="form.regdate" type="text" name="regdate"
                        placeholder="Registered At"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('regdate') }">
                      <has-error :form="form" field="regdate"></has-error>
                   </div>

                   <div class="form-group">
                      <input v-model="form.password" type="password" name="password"
                        placeholder="Enter Password"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                      <has-error :form="form" field="password"></has-error>
                   </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Update</button>
                    <button type="button" class="btn btn-primary">Create</button>
                </div>

              </form>

              </div>
            </div>
          </div> 

    </div>
</template>

<script>
    export default {
        data () {
    return {
      // Create a new form instance
      form: new Form({
        name: '', 
        phonenumber: '', 
        cnic: '',             
        city: '',
        dumperplateno: '',
        dumpersize: '',
        dumperwheels: '',
        type: '',
        regdate: '',                 
        password: '',
        remember: false
      })
    }
  },
        methods:{
          newDumperModal(){
            alert();
            $('#addNewdumper').modal('show');
          }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
