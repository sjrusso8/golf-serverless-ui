<template>
	<div class="chart">
		<Chart :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType" :chartClass="chartClass" />
	</div>
</template>

<script>
import Chart from "./Chart";

export default {
	components: {
		Chart,
	},
	data() {
		return {
            chartClass: "GIR",
			chartType: "polarArea",
			chartData: {
				datasets: [{
					data: [ .03, .32,.54,.23,.1,.05],
					backgroundColor: [
                        "red",
                        "green",
                        "yellow",
                        "blue",
                        "orange",
                        "gray"
					],
					label: 'My dataset'
				}],
				labels: [
					'Left',
					'Hit',
					'Right',
					'Long',
					'Short',
					'Shank',
				]
			},
            chartOptions: {
                responsive: true,
					legend: {
						position: 'bottom',
					},
					title: {
                        display: true,
						text: 'GIR Accuracy'
					},
				scale: {
					ticks: {
						beginAtZero: true
					},
					reverse: false
				},
				animation: {
					animateRotate: false,
					animateScale: true
				}
            }
			
		};
	},
};
</script>