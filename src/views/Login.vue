<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="25px" width="25px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M430.68,302.881c-42.185-17.874-96.504-28.532-154.68-30.525v-91.767l139.125-68.567    c6.832-3.367,11.158-10.322,11.158-17.939s-4.326-14.572-11.158-17.939L264.841,2.078C251.581-4.454,236,5.201,236,20.017    c0,0.693,0,241.495,0,252.339c-58.177,1.993-112.495,12.651-154.68,30.525C28.88,325.101,0,356.752,0,392.004    c0,35.252,28.88,66.903,81.32,89.123C128.306,501.036,190.342,512,256,512s127.694-10.964,174.68-30.873    c52.44-22.22,81.32-53.871,81.32-89.123C512,356.752,483.12,325.101,430.68,302.881z M276,52.171l85.043,41.913L276,135.996    V52.171z M415.074,444.298c-42.162,17.865-98.656,27.703-159.074,27.703s-116.912-9.839-159.074-27.703    C61.281,429.195,40,409.646,40,392.004c0-17.642,21.281-37.191,56.926-52.294c37.472-15.877,86.268-25.408,139.074-27.333v79.365    c0,11.046,8.954,19.999,20,19.999c11.046,0,20-8.954,20-19.999v-79.365c52.807,1.926,101.602,11.456,139.074,27.333    C450.719,354.814,472,374.363,472,392.004S450.719,429.195,415.074,444.298z"/>
        </svg>
        <span class="text-2xl font-bold text-black mx-2" href="#">Golf<span class="font-normal">Caddie</span></span>
      </div>

      <form class="mt-4" @submit.prevent="submit">
        <label class="block">
          <span class="text-gray-700 text-sm">Email</span>
          <input
            type="email"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="credentials.email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Password</span>
          <input
            type="password"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="credentials.password"
          />
        </label>

        <div class="flex justify-between items-center mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="mx-2 text-gray-600 text-sm">Remember me</span>
            </label>
          </div>

          <div>
            <a
              class="block text-sm fontme text-indigo-700 hover:underline"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-hero-blue-300 rounded-md w-full text-white text-sm hover:bg-hero-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <!-- <div v-if="errorMessage">Wrong credentials entered! Please try again</div> -->
    </div>
  </div>
</template>

<script>
import * as types from "@/store/modules/auth/mutation-types";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
      errorMessage: false,
    };
  },
  methods: {
    submit() {
      let credential = {
        email: this.credentials.email,
        password: this.credentials.password,
      };
      let redirect = decodeURIComponent(this.$route.query.redirect || "/");
      console.log(redirect);

      this.$store
        .dispatch(types.LOGIN, {
          credential: credential,
        })
        .then(() => {
          this.errorMessage = false;
          this.$router.push(redirect);
        })
        .catch((err) => {
          this.errorMessage = true;
          console.log(err);
        });
    },
  },
};
</script>