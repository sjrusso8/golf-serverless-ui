<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-52">
            <div class="bg-cover bg-hero-pattern w-auto h-full">
                <div class="flex justify-between">
                    <!-- Welcome -->
                    <div class="flex-1 flex-col items-center justify-between h-16 p-12 text-white">
                        <p class="text-2xl pb-2">Welcome, <span class="text-2xl font-bold tracking-wide">Tiger Woods</span> </p>
                        <p class="text-sm"> How does the game feel today? </p>
                    </div>
                    <!-- Quick Facts -->
                    <div class="flex flex-row justify-between h-16 p-12 text-white">
                        <div class="flex flex-col items-center px-5">
                            <p class="text-2xl pb-2 font-bold tracking-wide">72</p>
                            <div class="flex items-center">
                                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <p class="px-1 text-ml"> Recent Score</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center px-5">
                            <p class="text-2xl pb-2 font-bold tracking-wide">65&deg;</p>
                            <div class="flex items-center">
                                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="px-1 text-ml"> Local Temp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Summary Cards -->
        <div class="flex flex-row p-4">
            <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 mr-4">
                <h2 class="pl-4 pt-2 text-lx font-bold tracking-wide">Round Averages</h2>
                <div class="p-4 flex items-center">
                    <div class="p-4 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                    </div>
                    <div class="flex ">
                        <div class="text-center pr-2">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Score</p>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                        </div>
                        <div class="text-center pr-2">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Putts</p>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 28 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-w-0 w-52 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 mr-4">
                <h2 class="pl-4 pt-2 text-lx font-bold tracking-wide">Round Percentages</h2>
                <div class="p-4 flex items-center">
                    <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                        </svg>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-center pr-6">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">GIR %</p>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 30% </p>
                        </div>
                        <div class="text-center pr-2">
                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">FIR %</p>
                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 30% </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-grow min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <h2 class="pl-4 pt-2 text-lx font-bold tracking-wide">Round Bar Chart</h2>
            </div>
        </div>
        <!-- Stat Cards -->
        <div class="flex flex-wrap -mx-1 overflow-hidden px-4">

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    FIRs
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    GIRs
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    Putting
                </div>
            </div>
        
            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    Scores by Par
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    Recovery
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden md:w-1/3">
                <div class="rounded-lg shadow-xs overflow-hidden bg-white">
                    Scoring
                </div>
            </div>

        </div>       
    </div>
</template>