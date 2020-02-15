<template>
  <div>
    <section>
      <div class=" italic px-8 w-full h-16 bg-gray-900 text-3xl font-bold text-white flex justify-between items-center">
        <span class="">
          <span class=" text-blue-700">C</span>ENTER FOR 
          <span class=" text-blue-700">I</span>NNOVATIVE
          <span class=" text-blue-700">T</span>EACHING AND 
          <span class=" text-blue-700">L</span>EARNING
        </span>
        <a v-if="false" href="/" class="text-2xl font-bold text-white">HOME</a>
      </div>
      <div class=" bg-gray-400 flex flex-row items-center justify-between px-8 h-20 border-b border-gray-600">
        <span class="text-4xl italic">Latest Activities</span>
        <div>
          <input type="text" placeholder="Search.." class=" shadow-sm rounded text-sm px-2 py-1">
          <button class="bg-white rounded-md ml-5 text-sm italic px-2 py-1 border border-gray-600+">Go</button>
        </div>
      </div>
    </section>
    <nuxt />
  </div>
</template>

<style>
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
