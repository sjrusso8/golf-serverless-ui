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
			chartClass: "rounds",
			chartType: "bar",
			chartData: {
				labels: ["1", "2", "3", "4", "5", "6", "7"],
				datasets: [
					{
						label: "Round",
						data: [74, 80, 82, 81, 76, 73, 74],
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
							stacked: true,
							gridLines: { 
								display: false,
							},
							ticks: {
								display: false //this will remove only the label
							}
						},
					],
					yAxes: [
						{
							gridLines:{
								color:"#ffffff"
							},
							ticks: {
								stepSize: 3,
							},
						},
					],
				},
				title: {
					display: true,
					text: 'Prior Rounds'
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