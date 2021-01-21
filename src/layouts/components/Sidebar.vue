<template>
        <!-- Navbar side -->
    <aside
    class="bg-hero-blue-500 md:block">
      <div class="flex items-center pr-12 pl-2">
        <svg class="m-2 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="20" width="20" viewBox="0 0 512 512" xml:space="preserve" fill="white">
          <path d="M430.68,302.881c-42.185-17.874-96.504-28.532-154.68-30.525v-91.767l139.125-68.567    c6.832-3.367,11.158-10.322,11.158-17.939s-4.326-14.572-11.158-17.939L264.841,2.078C251.581-4.454,236,5.201,236,20.017    c0,0.693,0,241.495,0,252.339c-58.177,1.993-112.495,12.651-154.68,30.525C28.88,325.101,0,356.752,0,392.004    c0,35.252,28.88,66.903,81.32,89.123C128.306,501.036,190.342,512,256,512s127.694-10.964,174.68-30.873    c52.44-22.22,81.32-53.871,81.32-89.123C512,356.752,483.12,325.101,430.68,302.881z M276,52.171l85.043,41.913L276,135.996    V52.171z M415.074,444.298c-42.162,17.865-98.656,27.703-159.074,27.703s-116.912-9.839-159.074-27.703    C61.281,429.195,40,409.646,40,392.004c0-17.642,21.281-37.191,56.926-52.294c37.472-15.877,86.268-25.408,139.074-27.333v79.365    c0,11.046,8.954,19.999,20,19.999c11.046,0,20-8.954,20-19.999v-79.365c52.807,1.926,101.602,11.456,139.074,27.333    C450.719,354.814,472,374.363,472,392.004S450.719,429.195,415.074,444.298z"/>
        </svg>
          <a class="text-md font-bold text-white mx-2" href="#">Golf<span class="font-normal">Caddie</span></a>
      </div>
      <div class="flex items-center h-20 bg-hero-blue-300">
        <div class="w-12 h-12 m-2 rounded-full ring-2 ring-white" style="background-image: url(https://picsum.photos/100/100)"></div>
        <div class="text-md text-white tracking-wide text-sm font-bold ">{{ user.first_name }} {{ user.last_name }}</div>
      </div>
      <div class="">
        <ul class="w-auto list-none">
          <li>
            <router-link :to="{name: 'Dashboard'}" class="flex items-center justify-between p-4 hover:bg-hero-blue-800">
              <span class="pl-3 text-white text-sm uppercase">Dashboard</span>
              <span class="">
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </router-link>
            <router-link :to="{name: 'Courses'}"  class="flex items-center justify-between p-4 hover:bg-hero-blue-800">
              <span class="pl-3 text-white text-sm uppercase">Courses</span>
              <span class="">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              </span>
            </router-link>
            <router-link :to="{name: 'Rounds'}"  class="flex items-center justify-between p-4 hover:bg-hero-blue-800">
              <span class="pl-3 text-white text-sm uppercase">Rounds</span>
              <span class="">
                <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
            </router-link>
            <router-link :to="{name: 'Practice'}" class="flex items-center justify-between p-4 hover:bg-hero-blue-800">
              <span class="pl-3 text-white text-sm uppercase">Practice</span>
              <span class="">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
</template>

<script>
import { mapGetters } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    let isOpen = ref(false)

    return { isOpen }
  },
  data() {
    return {
      user: {}
    }

  },
  methods: {
    getUserDetails() {
      // console.log(this.GET_userDetails)
      this.user = this.GET_userDetails
    }
  },
  computed: {
        ...mapGetters([
            'GET_userDetails',
        ])
    },
  mounted() {
        this.getUserDetails()
    }
}
</script>