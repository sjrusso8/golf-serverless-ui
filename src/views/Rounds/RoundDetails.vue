<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full p-4">
            <h2 class="text-xl font-bold tracking-wide">TPC Riversbend</h2>
            <div class="flex">
                <p class="text-sm px-1"><span class="font-bold">Date</span> 2020/06/01 |</p>
                <p class="text-sm px-1">Par: <span class="font-bold">72 </span>|</p>
                <p class="text-sm px-1">Holes: <span class="font-bold">18</span></p>
            </div>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Overview</h3>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden p-4">
            <div class="w-1/5 h-18 rounded-l-lg border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 break-words">Holes Played</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> {{ roundData.round_type }} </p>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Score</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> {{ roundData.score_total }} </p>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total Putts</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> {{ roundData.putts_total }} </p>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">GIR</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                        <p v-if="apiLoaded" class="text-lg font-semibold text-gray-700 dark:text-gray-200"> {{ Math.round(roundData.approach_gir_percent * 100) }}%</p>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-18 rounded-r-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">FIR</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 h-4"></div>
                        <p v-if="apiLoaded" class="text-lg font-semibold text-gray-700 dark:text-gray-200">  {{ Math.round(roundData.fairways_hit_percent * 100) }}% </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Detailed Scorecard</h3>
        </div>
        <Shotscorecard :tees="teeData" :holeindexpar="shotData" :shotdata="shotData"/>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';
import Shotscorecard from "@/components/scorecard/ShotScorecard.vue"

export default {
    components: {
        Shotscorecard
    },
    data() {
        return {
            roundData: {},
            teeData: {},
            shotData: [],
            headers: {},
            userToken: {},
            apiLoaded: false
        }
    },
    methods: {
        setUserID() {
            this.userToken = this.GET_user
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
        async userShots() {

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.GET_accessToken}` }
            };       

        return axios
            .get(
                process.env.VUE_APP_API_BASE + "users_shots/" + this.userToken.user_id,
                config
                )
            .then(response => {
                this.teeData = response.data.user_rounds[0].tees
                this.shotData = this.teeData.tee_holes.slice().reverse()
                }
            )
            .catch(e => {
                console.log(e);
            });
        }
    },
    computed: {
        ...mapGetters([
            'GET_user',
            'GET_accessToken',
        ])
    },
    mounted() {
        this.setUserID(),
        this.userRound(),
        this.userShots()
    }
}
</script>