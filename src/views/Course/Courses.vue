<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
    </div>
    <div class="bg-white w-full p-4">
        <h2 class="text-xl font-bold tracking-wide">Nearby Courses</h2>
    </div>
    <div class="flex flex-row flex-wrap p-4" v-if="!apiLoaded" >
        <div class="w-full sm:w-1/4 lg:w-1/6 mb-2 rounded shadow-sm overflow-hidden bg-white mr-4 hover:shadow-md" >
            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
            <div class="flex flex-col p-2">
                <div class="animate-pulse rounded-full bg-green-400 m-2 w-1/2 h-4"></div>
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap p-4">
        <router-link 
            v-for="course in courses" 
            :key="course.id" 
            :to="{ name: 'Course Details', params: { id: course.id, name_url: course.name_url, city_url: course.city_url}}" 
            class="w-full sm:w-1/4 lg:w-1/6 mb-2 rounded shadow-sm overflow-hidden bg-white mr-4 hover:shadow-md">
                <h2 class="pl-4 pr-4 pt-2 text-lx font-bold tracking-wide">{{ course.name }}</h2>
                <div class="flex flex-col p-4">
                    <p class="text-sm font-semibold text-gray-700 uppercase">{{ course.city }}, {{ course.state }}</p>
                </div>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    data() {
        return {
            userDetails: [],
            courses: [],
            apiLoaded: false,
        }
    },
    methods: {
        async hometownCourses() {

            this.userDetails = this.GET_userDetails

            const config = {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.GET_accessToken}` }
                };       

            return axios
                .get(
                    process.env.VUE_APP_API_BASE + `courselookup?search=${this.userDetails.hometown}`,
                    config
                    )
                .then(response => {
                    this.courses = response.data.results
                    this.apiLoaded = !this.apiLoaded
                    }
                )
                .catch(e => {
                    console.log(e);
                });
        }
    },
    computed: {
        ...mapGetters([
            'GET_accessToken',
            'GET_userDetails',
        ])
    },
    mounted() {
        this.hometownCourses()
    }
}
</script>