<template>
	<div class="chart">
		<Chart :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType"  :chartClass="chartClass"/>
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
            chartClass: "FIR",
			chartType: "polarArea",
			chartData: {
				datasets: [{
					data: [ .17, .57,.36,.1,.2,.01],
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
						text: 'FIR Accuracy'
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