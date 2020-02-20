<template>
  <div class="h-full overflow-hidden">
    <!-- <div v-if="show" class="w-64 h-64 bg-black">

    </div> -->

    <div class="relative overflow-hidden">
      <div class="h-full w-full overflow-hidden">
        <img class="h-full w-full inline-block" src="@/assets/img/background.svg" alt="Background">
        <div class="absolute inset-0 h-full w-full">
          <span class="text-3xl italic font-bold flex justify-end pr-20 pt-8">ADMIN REGISTRATION</span>
          <div class="">      
              <div class="flex flex-col w-full">
                <div class="flex justify-end pr-24 pt-1">
                  <form class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4 flex items-center">
                      <span class="block text-gray-700 text-sm font-bold mr-12">
                        Username
                      </span>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                      </label>
                      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                      <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
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