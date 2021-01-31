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
            chartClass: "Putts",
			chartType: "polarArea",
			chartData: {
				datasets: [{
					data: [ .42, .35,.14,.03,.25,.05],
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
						text: 'Putt Accuracy'
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