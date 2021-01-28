<template>
    <header class="flex items-center justify-between bg-white">
      <SearchBar />
      <div class="flex content-center">
            <button
                class="px-6 h-6 m-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                Post a Round
            </button>
        <div 
        @click="dropdownOpen = !dropdownOpen"

        class="relative mr-4 mt-2 w-8 h-8 cursor-pointer">
          <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <!-- Dropdown menu -->
          <div 
          v-show="dropdownOpen"
          class="absolute top-10 -right-2 w-40 h-auto rounded border-md border-black shadow-md bg-white">
            <ul class="m-0 p-0 list-none cursor-pointer">
              <router-link
            :to="{ name: 'Profile' }" class="flex flex-row items-center p-2 hover:bg-gray-200">
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="ml-2">My Profile</span>
              </router-link>
              <router-link
            :to="{ name: 'Logout' }" class="flex flex-row items-center p-2  hover:bg-gray-200">
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span class="ml-2">Logout</span>
              </router-link >
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";

export default {
  components : {
    SearchBar
  },
  setup() {
    let dropdownOpen = ref(false);

    return { dropdownOpen }
  }
}
</script>