<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        Course Details 
        <p>{{ courseData }}</p>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    props: [
        "id",
        "course",
        "city"
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
                    process.env.VUE_APP_API_BASE + `coursedetails/${this.id}/${this.course}/${this.city}/`,
                    config
                    )
                .then(response => {
                    console.log(response.data)
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