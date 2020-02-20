<template>
  <div>
    <!--  -->
    <!--  -->
    <header>
      
      <div class=" italic w-full h-16 bg-gray-900 text-3xl font-bold text-white flex items-center">
        <label for="menu-toggle" class="pt-2 pl-8"> 
          <svg width="57" height="42" viewBox="0 0 57 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M8 7H49" stroke="#C7C7C7" stroke-width="5"/>
            </g>
            <g filter="url(#filter1_d)">
            <path d="M8 17H49" stroke="#C7C7C7" stroke-width="5"/>
            </g>
            <g filter="url(#filter2_d)">
            <path d="M8 27H49" stroke="#C7C7C7" stroke-width="5"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0.5" width="57" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="filter1_d" x="0" y="10.5" width="57" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="filter2_d" x="0" y="20.5" width="57" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
        </label>
        <span class="pl-6">
          <span class=" text-blue-700">C</span>ENTER FOR 
          <span class=" text-blue-700">I</span>NNOVATIVE
          <span class=" text-blue-700">T</span>EACHING AND 
          <span class=" text-blue-700">L</span>EARNING
        </span>
        <a v-if="false" href="/" class="text-2xl font-bold text-white">HOME</a>
      </div>      
      <!--<div class="px-8 w-64 h-auto bg-gray-800 text-3xl font-bold text-white flex justify-between items-center">
        <h1>sdfbds</h1>
      </div>-->
      
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
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
