<template>
	<div :class="chartClass">
		<canvas></canvas>
	</div>
</template>

<script>
import Chart from "chart.js";

export default {
	props:{
		chartClass:String,
		chartType:String,
		chartData:Object,
		chartOptions:Object
	},
	methods: {
		
    chartConstructor(chartType, chartData, chartOptions) {
        const chartElement = document.querySelector(`.${this.chartClass} canvas`);
        // eslint-disable-next-line no-unused-vars
        const chart = new Chart(chartElement, {
            type: chartType,
            data: chartData,
            options: chartOptions,
        });
    },
	},
	
	mounted(){
		let {chartType,chartData,chartOptions} = this;
		this.chartConstructor(chartType, chartData, chartOptions);
	}
};
</script>