<template>
    <div>
        <!-- Header Cover Image -->
        <div class="h-32">
            <div class="bg-cover bg-hero-pattern w-full h-full"></div>
        </div>
        <div class="bg-white w-full p-4">
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
                    <tr class="py-2">
                        <td class="border-solid border-t border-gray-200 py-2">
                            <router-link :to="{name: 'Round Details'}" class="text-blue-700 font-bold px-6 flex items-center">Course Name</router-link >
                            <span class="text-gray-400 px-6 text-sm">Date</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">80</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">32</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">50%</span>
                        </td>
                        <td class="text-center border-solid border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3">50%</span>
                        </td>
                    </tr>
				</tbody>
			</table>
		</div>
    </div>
</template>