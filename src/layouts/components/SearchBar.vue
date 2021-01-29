<template>
    <div class="border-none ml-6 text-md bg-gray-300">
        <input class="p-2 text-md w-auto" 
        placeholder="Search for a Course..." 
        v-model.trim="searchTerm"
        @keyup.prevent="getResults"
        />
    </div>
    <div class="absolute bg-white top-10 ml-1 rounded-md w-full md:w-1/2 max-h-64 overflow-auto">
        <div class="animate-pulse flex flex-col justify-around " v-if="searchTerm && !apiLoaded">
            <div class="flex justify-start align-start border-b-2">
                <span class="rounded-full bg-green-400 m-2 w-1/2 h-4"></span>
                <span class="rounded-full bg-green-400 m-2 w-1/4 h-4"></span>
                <span class="rounded-full bg-green-400 m-2 w-1/4 h-4"></span>
            </div>
        </div>
        <div class="flex flex-col justify-around " v-if="searchTerm && apiLoaded">
            <div v-for="course in courseList" :key="course.id">
                <router-link
                    :to="{
                        name: 'Course Details',
                        params: {
                        id: course.id,
                        name_url: course.name_url,
                        city_url: course.city_url
                        }
                    }"
                    >
                    <div class="flex justify-start align-start border-b-2 hover:bg-gray-100" @click="searchTerm = ''">
                        <span class="font-bold p-2 w-1/2">{{ course.name }}</span>
                        <span class="text-gray-500 p-2 w-1/4">{{ course.state }}</span>
                        <span class="text-gray-500 p-2 w-1/4">{{ course.city }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    data() {
        return {
            searchTerm: "",
            apiLoaded: false,
            courseList: [],
        }

    },
    methods: {
        async getResults() {
            if (this.searchTerm.length >=2 ) {
                setTimeout(() => {
                    let cleanedTerm = this.searchTerm.replace(/ /g, "%20");
                    console.log(cleanedTerm)

                    const config = {
                        headers: { 
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${this.GET_accessToken}` 
                            }
                        };       

                    return axios
                        .get(
                            process.env.VUE_APP_API_BASE + `courselookup?search=${this.searchTerm}`,
                            config
                            )
                        .then(response => {
                            this.courseList = response.data.results
                            this.apiLoaded = true
                            }
                        )
                        .catch(e => {
                            console.log(e);
                        });
                }, 1000)
            } this.apiLoaded = false;
        }
    },
    computed: {
        ...mapGetters([
            'GET_accessToken',
        ])
    },
}
</script>