<template>
  <div class="pop">
    <header>      
      <div class=" italic w-full h-16 bg-gray-900 text-3xl font-bold text-white flex items-center justify-between px-6">
        <div class="flex">
          <button type="button" class="text-gray-500 focus:text-white hover:text-white focus:outline-none">
          <svg class='h-8 w-8 fill-current' viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>            
          </svg>
          </button>
        </label>

        <span class="pl-6">
          <span class=" text-blue-700">C</span>ENTER FOR 
          <span class=" text-blue-700">I</span>NNOVATIVE
          <span class=" text-blue-700">T</span>EACHING AND 
          <span class=" text-blue-700">L</span>EARNING
        </span>
        </div>
        <div>
        
        </div>
      </div>      
      <!--<div class="px-8 w-64 h-auto bg-gray-800 text-3xl font-bold text-white flex justify-between items-center">
        <h1>sdfbds</h1>
      </div>-->
      
    </header>
    <div class="h-screen overflow-hidden">
      

    <nuxt class="" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'
export default {
  data() {
    return {      
    }
  },
  head(){
    return {
      link:[
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins&display=swap"
        }
        
      ]
    }
  },
  methods: {
    logout_user(){
      firebase.auth().signOut().then(function(){
        window.location.pathname = '/login'
        console.log("logout")
      }).catch(function(err){
        console.log(err.message)
      })
    }
  }
}
</script>
<style>
  .pop {
    font-family: 'poppins'
  }
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
