<template>
	<div class="chart">
		<Chart :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType" :chartClass="chartClass"/>
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
			chartClass: "scores",
			chartType: "bar",
			chartData: {
				labels: ["Par3", "Par4", "Par5"],
				datasets: [
					{
						label: "PGA Tour Average",
						data: [3.07, 4.02, 4.63],
						backgroundColor: "green",
						borderColor: "#5cddff",
						lineTension: 0,
						pointBackgroundColor: "#5cddff",
                    },
                    {
						label: "Personal Averge",
						data: [4, 5.02, 6.63],
						backgroundColor: "#0079ff",
						borderColor: "#5cddff",
						lineTension: 0,
						pointBackgroundColor: "#5cddff",
					},
				],
			},
			chartOptions: {
				scales: {
					xAxes: [
						{
							stacked: false,
							gridLines: { 
								display: false,
							},
						},
					],
					yAxes: [
						{
							gridLines:{
								color:"#ffffff"
							},
							ticks: {
                                min: 0,
								stepSize: 3,
							},
						},
					],
				},
				title: {
					display: true,
					text: 'Scoring Averages'
				},
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false
				},
				animation: {
					duration: 2000,
					easing: "easeInOutQuart",
                },	
			},
			
		};
	},
};
</script>