<template>
  <body class="bg-gray-300">
    <div class=" bg-gray-300 flex flex-row items-center justify-between px-8 h-20 border-b border-gray-600">
      <span class="text-4xl italic">Latest Activities</span>
      <div>
        <input type="text" placeholder="Search.." class=" shadow-sm rounded text-sm px-2 py-1">
        <button class="bg-white rounded-md ml-5 text-sm italic px-2 py-1 border border-gray-600+">Go</button>
      </div>
    </div>
  </body>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
