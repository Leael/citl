<template>
  <div class="h-full overflow-hidden pop">
    <!-- <div v-if="show" class="w-64 h-64 bg-black">

    </div> -->

    <div class="relative overflow-hidden">
      <div class="h-full w-full overflow-hidden">
        <img class="h-full w-full inline-block" src="@/assets/img/background.svg" alt="Background">
        <div class="absolute inset-0 h-full w-full ">
          <div class="flex flex-col mx-24">
            <span class="text-3xl italic font-bold flex justify-end pr-12 pt-8 pop">ADMIN REGISTRATION</span>     
                <div class="flex flex-col w-full pop">
                  <div class="flex justify-end mt-1">
                    <form action="#"  @submit.prevent="validateBeforeSubmit" class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div class="mb-4 flex items-center justify-between">
                        <span class="block text-gray-700 text-sm font-bold mr-12">Display Name:</span>
                        <div class="flex flex-col w-48">
                          <input v-model="display_name" v-validate="'required|min:4'" name="displayname" class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text">
                          <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('displayname') }}</span>
                        </div>
                      </div>

                      <div class="mb-4 flex items-center justify-between">  
                        <span class="block text-gray-700 text-sm font-bold mr-12">Email:</span>
                        <div class="flex flex-col w-48">
                          <input v-model="email" v-validate="'required|email'" name="email" class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text">
                          <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('email') }}</span>
                        </div>                        
                      </div>

                      <div class="mb-4 flex items-center justify-between">
                        <span class="block text-gray-700 text-sm font-bold mr-12">Password:</span>
                        <div class="flex flex-col w-48">
                          <input 
                          v-model="password"
                          v-validate="'required|min:6'"
                          name="password" 
                          class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          id="password1" 
                          type="password">
                          <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('password') }}</span>
                        </div>
                      </div>

                      <div class="mb-4 flex items-center justify-between">
                        <span class="block text-gray-700 text-sm font-bold mr-12">Confirm Password:</span>
                        <div class="flex flex-col w-48">
                          <input 
                          v-model="confirmPassword"
                          v-validate="'required'"
                          name="confirm-password"
                          class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          id="confirm-password" 
                          type="password">
                          <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('confirm-password') }}</span>  
                          <span v-if="match" class="mt-1 text-xs font-medium text-red-500">Confirm password does not match.</span>
                        </div>
                      </div>

                      <div class="flex flex-row">
                        <p class="txt">Already have an account?  </p><nuxt-link to="/login" class="reg txt1">Login</nuxt-link>
                      </div>
                      <div class="flex items-center justify-between">
                        <button type="submit"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Create Account
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
import firebase from 'firebase'
import "firebase/auth"
export default {
  layout: "admin",
  data() {
    return {
      show: false,
      display_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      match: ""
    }
  },
  methods: {
    check_user() {
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          console.log("naay user")
        }
        else{
          console.log("walay user")
        }
      })
    },
    test() {
      console.log(this.display_name)
    },
    create_user(){
      let name = this.display_name
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(creds) {
        console.log("success")
        creds.user.updateProfile({
          displayName: name
        }).then(function() {
          console.log("create with displayname")
          window.location.pathname="/home_admin"
        })
        
      }).catch(function(err){
        console.log(err.message);
      }
      )
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log("No error");
          if (this.password === this.confirmPassword) {
            this.create_user();
          } else {
            this.match = true;
          }
        } else {
          console.log("Errored");
        }
      });
    }
    // logout_user(){
    //   firebase.auth().signOut().then(function(){
    //     console.log("nalogout na")
    //   })
    // }
  },
  created(){
    this.check_user();
  }
}
</script>

<style>
  .pop {
    font-family: 'Poppins' ;
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

 .txt1 {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 12px
 }

 .reg{
   color: #D84141;
 }
</style>