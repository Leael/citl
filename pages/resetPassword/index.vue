<template>
    <div class="flex justify-center flex-col mt-20 mb-4">
        <div class="flex justify-center flex-col items-center">
        <span class="text-2xl font-bold">Forget Password?</span>
        <span>Please enter your email address below and we will send you information to recover your account</span>
        </div>
        <form action="" >
            <div class="mt-16 mb-4 flex items-center justify-center">                      
                <span class="block text-gray-700 text-sm font-bold mr-12">Email:</span>     
                <div class="flex w-64">
                <input 
                v-model="email" 
                v-validate="'required|email'"
                name="email"
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="text">
                <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('email') }}</span>
                </div>               
            </div>
            <div class="flex justify-center">
            <button @click.prevent="resetPassword" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Reset Password
            </button>
            </div>
        </form>

    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    layout: "admin",
    data(){
        return{
            email: "",
            error: ''
        }
    },

    methods: {
        resetPassword(){
            const auth = firebase.auth();
            const emailAddress = this.email;
            console.log(emailAddress)
            auth.sendPasswordResetEmail(emailAddress).then(function() {
            alert('Password Reset was sent to your Email')
            console.log('email sent')
            }).catch(err => {
              this.error = err;
              console.log(err.message)
            })
        }
    }
}
</script>

<style>

</style>