<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
    </div>
    <div class="bg-white w-full p-4">
        <h2 class="text-xl font-bold tracking-wide">Nearby Courses</h2>
    </div>
    <div class="flex flex-row flex-wrap p-4">
        <router-link :to="{name: 'Dashboard'}" class="w-48 mb-2 rounded-lg shadow-sm overflow-hidden bg-white mr-4 hover:shadow-md">
            <h2 class="pl-4 pr-4 pt-2 text-lx font-bold tracking-wide">Tpc At Piper Glen</h2>
            <p class="pl-4 pt-1 text-sm text-gray-400">Private</p>
            <div class="flex flex-col p-4">
                <p class="text-sm font-semibold text-gray-700">Charlotte, NC</p>
                <p class="text-sm font-semibold text-gray-400">4300 Piper Glen Dr</p>
                <p class="text-sm font-semibold text-gray-400">18 holes</p>
            </div>
        </router-link>       
    </div>
</template>