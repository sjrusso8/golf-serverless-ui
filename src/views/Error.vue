<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="25px" width="25px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M430.68,302.881c-42.185-17.874-96.504-28.532-154.68-30.525v-91.767l139.125-68.567    c6.832-3.367,11.158-10.322,11.158-17.939s-4.326-14.572-11.158-17.939L264.841,2.078C251.581-4.454,236,5.201,236,20.017    c0,0.693,0,241.495,0,252.339c-58.177,1.993-112.495,12.651-154.68,30.525C28.88,325.101,0,356.752,0,392.004    c0,35.252,28.88,66.903,81.32,89.123C128.306,501.036,190.342,512,256,512s127.694-10.964,174.68-30.873    c52.44-22.22,81.32-53.871,81.32-89.123C512,356.752,483.12,325.101,430.68,302.881z M276,52.171l85.043,41.913L276,135.996    V52.171z M415.074,444.298c-42.162,17.865-98.656,27.703-159.074,27.703s-116.912-9.839-159.074-27.703    C61.281,429.195,40,409.646,40,392.004c0-17.642,21.281-37.191,56.926-52.294c37.472-15.877,86.268-25.408,139.074-27.333v79.365    c0,11.046,8.954,19.999,20,19.999c11.046,0,20-8.954,20-19.999v-79.365c52.807,1.926,101.602,11.456,139.074,27.333    C450.719,354.814,472,374.363,472,392.004S450.719,429.195,415.074,444.298z"/>
        </svg>
        <span class="text-2xl font-bold text-black mx-2" href="#">Golf<span class="font-normal">Caddie</span></span>
      </div>
        <div class="flex flex-col justify-between items-center">
            <p class="mt-4 font-bold text-xl py-4">Error! Page Not Found!</p>
            <router-link
                :to="{name: 'Dashboard'}"
                class="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                Back to the Homepage
            </router-link>
        </div>
    </div>
  </div>
</template>