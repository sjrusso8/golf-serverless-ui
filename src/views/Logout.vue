<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/859/859021.svg"
          alt="Golf"
          class="replaced-svg mx-2"
          width="25"
          height="25"
        />
        <span class="text-gray-700 font-semibold text-2xl">Golf Caddie</span>
      </div>
      <p>You have been logged out</p>

      <div class="mt-6">
        <router-link
          :to="{ name: 'Login' }"
          class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
        >
          Log In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import * as types from "@/store/modules/auth/mutation-types";
export default {
  // mounted() {
  //   // `this` works in mounted mode.
  //   this.$store.commit(types.LOGOUT);
  //   // Might be putting redirect into block of methods.
  // },
};
</script>