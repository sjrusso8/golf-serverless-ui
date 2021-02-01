<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32 md:h-52">
            <div class="bg-cover bg-hero-pattern w-auto h-full">
                <div class="flex justify-between">
                    <!-- Welcome -->
                    <div class="flex-1 flex-col items-center justify-between h-16 p-6 md:p-12 text-white">
                        <p class="text-md md:text-2xl pb-2">Welcome, <span class="text-md md:text-2xl font-bold tracking-wide">{{ user.first_name }} {{ user.last_name }}</span> </p>
                    </div>
                    <!-- Quick Facts -->
                    <div class="flex flex-row justify-between h-16 p-6 md:p-12 text-white">
                        <div class="flex flex-col items-center px-5">
                            <p class="text-lg md:text-2xl pb-2 font-bold tracking-wide">{{ roundData.score_total }} </p>
                            <div class="flex items-center">
                                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <p class="px-1 text-sm md:text-ml"> Recent Score</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center px-5">
                            <p class="text-lg md:text-2xl pb-2 font-bold tracking-wide">65&deg;</p>
                            <div class="flex items-center">
                                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="px-1 text-sm md:text-ml"> {{ user.hometown }} Temp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Summary Cards -->
        <div class="flex flex-col md:flex-row p-4">
            <div class="w-full md:w-1/4 mb-2 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 mr-4">
                <h2 class="pl-4 pt-2 text-lx font-bold tracking-wide">Round Averages</h2>
                <div class="p-4 flex flex-row justify-around md:flex-col items-center">
                    <div class="flex">
                        <div class="text-center pr-12">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Score</p>
                            <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{ roundData.score_total }} </p>
                        </div>
                        <div class="text-center ">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Putts</p>
                            <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> {{ roundData.putts_total }} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/4 mb-2 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 mr-4">
                <h2 class="pl-4 pt-2 text-lx font-bold tracking-wide">Round Percentages</h2>
                <div class="p-4 flex flex-row justify-around md:flex-col items-center">
                    <div class="flex justify-between">
                        <div class="text-center pr-12">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">GIR %</p>
                            <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                            <p v-if="apiLoaded" class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{ Math.round(roundData.approach_gir_percent * 100) }}% </p>
                        </div>
                        <div class="text-center pr-2">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">FIR %</p>
                            <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                            <p v-if="apiLoaded" class="text-lg font-semibold text-gray-700 dark:text-gray-200">  {{ Math.round(roundData.fairways_hit_percent * 100) }}% </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-grow mb-2 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"> 
                <BarChart />  
            </div>
        </div>
        <!-- Stat Cards -->
        <div class="flex flex-wrap -mx-1 px-4">

            <div class="my-1 px-1 w-full md:w-1/3">
                <div class="rounded-lg shadow-xs h-auto bg-white">
                    <FIRChart />
                </div>
            </div>

            <div class="my-1 px-1 w-full md:w-1/3">
                <div class="rounded-lg shadow-xs h-auto bg-white">
                    <GIRChart />
                </div>
            </div>

            <div class="my-1 px-1 w-full md:w-1/3">
                <div class="rounded-lg shadow-xs h-auto bg-white">
                    <PuttChart />
                </div>
            </div>
        
            <div class="my-1 px-1 w-full md:w-1/3">
                <div class="rounded-lg shadow-xs bg-white">
                    <ScoreChart />
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/2">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    <ScoringBarChart />
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';
import BarChart from "@/components/charts/BarChart";
import FIRChart from "@/components/charts/FIRChart";
import GIRChart from "@/components/charts/GIRChart";
import PuttChart from "@/components/charts/PuttChart";
import ScoreChart from "@/components/charts/ScoreBarChart";
import ScoringBarChart from "@/components/charts/ScoringBarChart";

export default {
    components: {
        BarChart,
        FIRChart,
        GIRChart,
        PuttChart,
        ScoreChart,
        ScoringBarChart
    },
    data() {
        return {
            user: {
                first_name: "",
                last_name: "",
                gender: "",
                bio: "",
                hometown: "",
                following: ""
            },
            userToken: {},
            roundData: {},
            apiLoaded: false
        }
    },
    methods: {
        normalizeUser(user) {
            this.user.first_name = user.first_name
            this.user.last_name = user.last_name
            this.user.gender = user.gender
            this.user.bio = user.bio
            this.user.hometown = user.hometown
            this.user.following = user.following
        },
        setUserID() {
            this.userToken = this.GET_user
        },
        async userDetails() {

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.GET_accessToken}` }
            };       

        return axios
            .get(
                process.env.VUE_APP_API_BASE + "profiles/" + this.userToken.user_id,
                config
                )
            .then(response => {
                this.normalizeUser(response.data)
                this.$store.dispatch('getUserDetails', this.user)
                }
            )
            .catch(e => {
                console.log(e);
            });
        },
        async userRound() {

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.GET_accessToken}` }
            };       

        return axios
            .get(
                process.env.VUE_APP_API_BASE + "users_rounds/" + this.userToken.user_id,
                config
                )
            .then(response => {
                this.roundData = response.data.user_rounds[0]
                this.apiLoaded = !this.apiLoaded
                }
            )
            .catch(e => {
                console.log(e);
            });
        },

    },
    computed: {
        ...mapGetters([
            'GET_user',
            'GET_accessToken',
        ])
    },
    beforeMount() {
        this.setUserID(),
        this.userDetails(),
        this.userRound()
    }
}
</script>