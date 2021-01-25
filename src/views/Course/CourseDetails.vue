<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="flex flex-row justify-between items-center bg-white w-full p-4">
            <div class="w-32 md:w-full">
                <h2 class="text-md md:text-xl font-bold tracking-wide">{{ courseData.name }}</h2>
                <p class="text-xs md:text-md capitalize pt-1 ">{{ courseData.address }}</p>
            </div>
            <div class="">
                <p class="text-xs md:text-sm text-blue-800">{{ courseData.website }}</p>
                <p class="text-xs md:text-sm ">{{ courseData.phone }}</p>
            </div>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Scorecard</h3>
        </div>
        <p>{{ courseData.tees }}</p>
        <p>{{ courseData.gps_holes }}</p>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    props: [
        "id",
        "name_url",
        "city_url"
    ],
    data() {
        return {
            courseData: {}
        }
    },
        methods: {
        async getCourseDetails() {

            const config = {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.GET_accessToken}` }
                };       

            return axios
                .get(
                    process.env.VUE_APP_API_BASE + `coursedetails/${this.id}/${this.name_url}/${this.city_url}/`,
                    config
                    )
                .then(response => {
                    this.courseData = response.data
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
        ])
    },
    mounted() {
        this.getCourseDetails()
    }
}
</script>