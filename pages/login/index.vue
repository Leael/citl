<template>
  <div class="h-full overflow-hidden pop">
    <!-- <div v-if="show" class="w-64 h-64 bg-black">

    </div> -->

    <div class="relative overflow-hidden">
      <div class="h-full w-full overflow-hidden">
        <img class="h-full w-full inline-block" src="@/assets/img/background.svg" alt="Background">
        <div class="absolute inset-0 h-full w-full">
          <div class="flex flex-col mx-24 mt-24">
          <span class="text-3xl italic font-bold flex justify-end pr-20 pt-8">ADMIN LOGIN</span>     
              <div class="flex flex-col w-full">
                <div class="flex justify-end mt-1">

                  <form action="#" @submit.prevent="validateBeforeSubmit" class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">                    
                    <div class="mb-4 flex items-center justify-between">                      
                      <span class="block text-gray-700 text-sm font-bold mr-12">Email:</span>     
                      <div class="flex flex-col w-48">
                       <input 
                       v-model="email" 
                       v-validate="'required|email'"
                       name="email"
                       class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                       id="email" 
                       type="text">
                       <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('email') }}</span>
                      </div>               
                    </div>

                    <div class="mb-4 flex items-center justify-between">                      
                      <span class="block text-gray-700 text-sm font-bold mr-12">Password:</span> 
                      <div class="flex flex-col w-48"> 
                        <input 
                        v-model="password" 
                        v-validate="'required'"
                        name="password"
                        class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password">    
                        <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('password') }}</span> 
                      </div>             
                    </div>

                    <p class="txt">No account yet? <nuxt-link to="/register" class="reg">Register</nuxt-link> </p>
                    
                      
                  <div v-if="error" class="mb-4 py-1 flex flex-col w-70">
                    <div class="px-3 py-2 border border-red-500 bg-red-100 rounded">
                      <span class="text-xs font-medium text-red-600 italic">{{ error.message }}</span>
                    </div>
                  </div>

                    <div class="flex items-center justify-between">
                      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                      </button>
                      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
      
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  layout: "admin",
  data() {
    return {
      show: false,
      email: "",
      password: '',
      error: ''
    }
  },
  methods: {
    login_user(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(){
        console.log("nakalogin")
        window.location.pathname = '/home_admin'
      }).catch(err => {
              this.error = err;
              console.log(err.message)
            })
    },
    validateBeforeSubmit() {
          this.$validator.validateAll().then(result => {
            if (result) {
              console.log("No error");
              this.login_user();
            } else {
              console.log("Errored");
            }
          });
        }
  } 
}
</script>

<style scoped>
  .pop {
    font-family: 'poppins';
  }
 .txt {
  height: 30px;
  margin-top: px;
  margin-left: 70px;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
 }

 .reg{
   color: #D84141;
 }
</style>