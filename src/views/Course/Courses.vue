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
    <div class="flex flex-row flex-wrap p-4">
            <router-link 
            v-for="course in courses" 
            :key="course.id" 
            :to="{ name: 'Course Details', params: { id: course.id, course: course.name_url, city: course.city_url}}" 
            class="w-1/6 mb-2 rounded-lg shadow-sm overflow-hidden bg-white mr-4 hover:shadow-md">
                <h2 class="pl-4 pr-4 pt-2 text-lx font-bold tracking-wide">{{ course.name }}</h2>
                <!-- <p class="pl-4 pt-1 text-sm text-gray-400">Private</p> -->
                <div class="flex flex-col p-4">
                    <p class="text-sm font-semibold text-gray-700 uppercase">{{ course.city }}, {{ course.state }}</p>
                    <!-- <p class="text-sm font-semibold text-gray-400">4300 Piper Glen Dr</p>
                    <p class="text-sm font-semibold text-gray-400">18 holes</p> -->
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
            courses: []
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
                    console.log(response.data)
                    this.courses = response.data.results
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