<template>
  <div>
    <h2>График изменения цены биткоина</h2>
    <canvas ref="chart" width="250" height="50"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  props: {
    dates: {},
    priceValues: {},
  },
  data() {
    return {
      chart: null,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Цена биткоина",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.setNewValues();
    this.drawChart();
  },
  methods: {
    drawChart() {
      const ctx = this.$refs.chart.getContext("2d");
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        type: "line",
        data: this.chartData,
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Дата",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Цена",
              },
            },
          },
        },
      });
    },
    setNewValues() {
      this.chartData.labels = this.dates;
      this.chartData.datasets[0].data = this.priceValues;
    },
  },

  watch: {
    chartData(newData) {
      this.drawChart();
      console.log("hh");
    },
    dates() {
      this.setNewValues();
      this.drawChart();
    },
  },
};
</script>
