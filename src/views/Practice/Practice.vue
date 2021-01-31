<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full  flex justify-between  p-4">
            <h2 class="text-xl font-bold tracking-wide">Practice</h2>
            <button
                @click="toggleModal"
                class="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                Add Practice Data
            </button>
        </div>
        <div class="bg-white w-full flex justify-between p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Statistics</h3>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden p-4">
            <div class="w-full md:w-1/2 h-18 mb-1 rounded-md md:rounded-l-lg md:border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="flex flex-col items-center p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Farthest Distance</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        <p v-if="apiLoaded" class="text-lg font-bold text-green-800 dark:text-gray-200"> {{ summaryStats.farthestDistance }}  </p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 h-18  mb-1 rounded-md md:border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="flex flex-col items-center p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Fastest Club Head Speed</p>
                        <div v-if="!apiLoaded" class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        <p v-if="apiLoaded" class="text-lg font-bold text-green-800 dark:text-gray-200"> {{ summaryStats.fastestClubHead }} </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 overflow-x-auto rounded-lg overflow-y-auto relative">
			<table class="table-auto w-full whitespace-no-wrap bg-white table-striped relative shadow rounded-md">
				<thead>
					<tr class="text-left">
					<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Date</th>
					<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Club</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Total Carry</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Total Distance</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Swing Speed</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Ball Speed</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Launch Angle</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Smash Factor</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Apex</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Spin Rate</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Shot Shape</th>
					</tr>
				</thead>
				<tbody>
                    <tr v-if="!apiLoaded">
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                        <td>
                            <div class="animate-pulse rounded-full bg-green-400 m-4 w-3/4 h-6"></div>
                        </td>
                    </tr>
                    <tr v-for="practice in practiceData" :key="practice.id"  class="py-2">
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">{{ new Date(practice.created_at).toLocaleDateString("en-US") }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 font-bold">{{ practice.club }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.carry }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.total }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.swing_speed }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.ball_speed }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.launch_angle }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.smash_factor }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.apex }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.spin_rate }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200 py-2">
                            <span class="text-sm text-gray-700 px-6 py-3">{{ practice.shot_shape }}</span>
                        </td>
                    </tr>
				</tbody>
			</table>
		</div> 
    </div>
    <BaseModal 
    :open="open"
    title="Add Practice Data"
    v-on:close-modal="toggleModal"/>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';
import BaseModal from "@/components/modal/BaseModal.vue"

export default {
    components: {
        BaseModal
    },
    data() {
        return {
            practiceData: [],
            summaryStats: {
                farthestDistance: 0,
                fastestClubHead: 0,
                avgSmashFactor: 0,
            },
            open: false,
            apiLoaded: false,
        }
    },
    methods: {
        toggleModal() {
            this.open = !this.open
        },
        getSummary(){
            this.summaryStats.farthestDistance = Math.max(...this.practiceData.map(data => data.total), 0);
            this.summaryStats.fastestClubHead = Math.max(...this.practiceData.map(data => data.swing_speed), 0);
            this.summaryStats.avgSmashFactor = this.practiceData.reduce(( a, b ) => a.swing_speed + b.swing_speed)
        },
        async userPractice() {

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.GET_accessToken}` }
            };       

        return axios
            .get(
                process.env.VUE_APP_API_BASE + "users_practice",
                config
                )
            .then(response => {
                this.practiceData = response.data.results
                this.getSummary()
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
        this.userPractice()
    }
}
</script>