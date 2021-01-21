<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full p-4">
            <h2 class="text-xl font-bold tracking-wide">Practice</h2>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Statistics</h3>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden p-4">
            <div class="md:w-1/5 h-18 rounded-l-lg border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Farthest Distance</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Fastest Club Head Speed</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Club Factor</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Smash Shape</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 rounded-r-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Shot Shape</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
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
                    <tr class="py-2">
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Date</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Club</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Carry</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Disance</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Swing Speed</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Ball Speed</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Launch Angle</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Smash Factor</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Apex</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Sping Rate</span>
                        </td>
                        <td class="border-solid border-t border-gray-200 py-2">
                            <span class="text-gray-700 px-6 py-3">Shot Shape</span>
                        </td>
                    </tr>
				</tbody>
			</table>
		</div> 
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    data() {
        return {
            practiceData: []
        }
    },
    methods: {
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
                console.log(response.data.results)
                this.practiceData = response.data.results
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