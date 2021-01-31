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
			chartClass: "scoring",
			chartType: "bar",
			chartData: {
				labels: ["Birdie or Better", "Pars", "Bogey", "Double Bogey", "Triple Bogey or Worse"],
				datasets: [
					{
						label: "Score",
						data: [5, 22, 1, 5, 1],
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
								stepSize: 2,
							},
						},
					],
				},
				title: {
					display: true,
					text: 'Scoring Percentages'
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