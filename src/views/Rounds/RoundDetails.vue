<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full p-4">
            <h2 class="text-xl font-bold tracking-wide">Course</h2>
            <div class="flex">
                <p class="text-sm px-1"><span class="font-bold">Date</span> |</p>
                <p class="text-sm px-1">Par: <span class="font-bold">70</span> |</p>
                <p class="text-sm px-1">Holes: <span class="font-bold">70</span> </p>
            </div>
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Overview</h3>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden p-4">
            <div class="md:w-1/5 h-18 rounded-l-lg border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Holes Played</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Score</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total Putts</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 border-r-2 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">GIR</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/5 h-18 rounded-r-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div class="p-2 text-center">
                    <div class="pr-2">
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">FIR</p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200"> 72.5 </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4">
            Scorecard
        </div>
        <div class="bg-white w-full p-4 mt-2">
            <h3 class="text-sm text-gray-600 font-bold tracking-wide uppercase">Statistics</h3>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden px-4 py-2">

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