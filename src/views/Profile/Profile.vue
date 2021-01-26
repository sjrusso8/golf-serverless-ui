<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
    </div>
    <div class="flex items-center w-full justify-center py-4">

        <div class="w-full m-4 md:w-1/2">
            <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ userDetails.first_name }} {{ userDetails.last_name }} </h3>
                    <div class="text-center text-gray-400 text-sm font-semibold">
                        <p>{{ userDetails.hometown }} </p>
                    </div>
                    <table class="text-xs my-3">
                        <tbody><tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Bio</td>
                            <td class="px-2 py-2">{{ userDetails.bio }}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Gender</td>
                            <td class="px-2 py-2">{{ userDetails.gender }}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Followers</td>
                            <div v-if="!userDetails.following">
                                <td class="px-2 py-2" >0</td>
                            </div>
                        </tr>
                    </tbody></table>

                    <div class="text-center my-3">
                        <a class="text-xs px-2 text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">Edit Profile</a>
                        <a class="text-xs px-2 text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">Change Password</a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            userDetails: []
        }
    },
    methods: {
        setUserDetails() {
            this.userDetails = this.GET_userDetails
        }
    },
    computed: {
        ...mapGetters([
            'GET_userDetails',
        ])
    },
    mounted() {
        this.setUserDetails()
    }
}
</script>