<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="flex flex-row justify-between items-center bg-white w-full p-4">
            <div class="w-32 md:w-full">
                <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 w-64 h-4"></div>
                <h2 class="text-md md:text-xl font-bold tracking-wide">{{ courseData.name }}</h2>
                <p class="text-xs md:text-md capitalize pt-1 ">{{ courseData.address }}</p>
            </div>
            <div class="">
                <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                <p class="text-xs md:text-sm text-blue-800">{{ courseData.website }}</p>
                <p class="text-xs md:text-sm ">{{ courseData.phone }}</p>
            </div>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Scorecard</h3>
        </div>
        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 w-1/4 m-4 h-4"></div>
        <Scorecard :tees="courseData.tees" :holeindexpar="holeIndexPar" :teedistances="teeDistances"/>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';
import Scorecard from "@/components/scorecard/Scorecard.vue"

export default {
    components: {
        Scorecard
    },
    props: [
        "id",
        "name_url",
        "city_url"
    ],
    data() {
        return {
            courseData: {},
            holeIndexPar: {},
            teeDistances: [],
            apiLoaded: false,
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
                    this.holeIndexPar = this.courseData.tees[0].tee_holes.slice().reverse()
                    response.data.tees.forEach(element => {
                            this.teeDistances.push({tees:element.tees, tee_holes: element.tee_holes.slice().reverse()})                      
                        });
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
        ])
    },
    mounted() {
        this.getCourseDetails()
    }
}
</script>