<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full flex justify-between p-4">
            <h2 class="text-xl font-bold tracking-wide">Rounds</h2>
        </div>
        <div class="p-4 overflow-x-auto rounded-lg overflow-y-auto relative">
			<table class="table-auto w-full whitespace-no-wrap bg-white table-striped relative shadow rounded-md">
				<thead>
					<tr class="text-left">
					<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Course</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Score</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Putts</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">GIR</th>
					<th class="text-center bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">Driving Acc.</th>
					</tr>
				</thead>
				<tbody>
                    <tr class="py-2" v-for="round in roundData" :key="round.date">
                        <td class="border-solid border-t border-gray-200 py-2">
                            <router-link :to="{name: 'Round Details'}" class="text-blue-700 font-bold px-6 flex items-center">TPC Riversbend</router-link >
                            <span class="text-gray-400 px-6 text-sm">{{ round.date }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">{{ round.score_total }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">{{ round.putts_total }}</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">{{ round.approach_gir_percent * 100 }}%</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">{{ Math.round(round.fairways_hit_percent * 100) }}%</span>
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
            roundData: [],
            userToken: {}
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
                this.roundData = response.data.user_rounds
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
        this.userRound()
    }
}
</script>