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
                  <form class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">                    
                    <div class="mb-4 flex items-center justify-between">                      
                      <span class="block text-gray-700 text-sm font-bold mr-12">Username:</span>                    
                       <input class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="">
                    </div>

                    <div class="mb-4 flex items-center justify-between">                      
                      <span class="block text-gray-700 text-sm font-bold mr-12">Password:</span>                    
                       <input class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="">
                    </div>

                    <p class="txt">No account yet? <nuxt-link to="/register" class="reg">Register</nuxt-link> </p>

                    <div class="flex items-center justify-between">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
export default {
  layout: "admin",
  data() {
    return {
      show: false
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