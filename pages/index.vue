<template>
  <div>
    <h1>Исторические данные о ценах на биткоин</h1>
    <period-selector v-model="selectedPeriod" @change="init" />
    <bitcoin-price-chart :dates="dates" :priceValues="priceValues" />
  </div>
</template>

<script>
import PeriodSelector from "~/components/PeriodSelector.vue";
import BitcoinPriceChart from "~/components/BitcoinPriceChart.vue";
import moment from "moment";

export default {
  components: {
    PeriodSelector,
    BitcoinPriceChart,
  },
  data() {
    return {
      selectedPeriod: "day",
      bitcoinData: [],
      todayDate: "",
      dates: [],
      priceValues: [],
    };
  },
  created() {
    this.todayDate = moment().format("YYYY-MM-DD");
  },
  mounted() {
    // this.loadBitcoinData(this.selectedPeriod);
    // this.init(null);
  },
  methods: {
    init(period) {
      if (
        period === null ||
        (period.startDate === this.todayDate &&
          period.endDate === this.todayDate)
      ) {
        this.loadBitcoinCurrentData();
      } else {
        this.loadBitcoinData(period);
      }
    },
    setArrays() {
      if (!!this.bitcoinData.bpi.USD) {
        this.dates = [this.todayDate];
        this.priceValues = [this.bitcoinData.bpi.USD.rate_float];
      } else {
        this.dates = Object.keys(this.bitcoinData.bpi);
        this.priceValues = Object.values(this.bitcoinData.bpi);
      }
    },
    async loadBitcoinData(period) {
      try {
        const response = await this.$axios.get(
          `https://api.coindesk.com/v1/bpi/historical/close.json?start=${period.startDate}&end=${period.endDate}`
        );
        this.bitcoinData = response.data;
        this.setArrays();
      } catch (error) {
        console.error("Error fetching bitcoin data:", error);
      }
    },
    async loadBitcoinCurrentData() {
      try {
        const response = await this.$axios.get(
          `https://api.coindesk.com/v1/bpi/currentprice.json`
        );
        this.bitcoinData = response.data;
        this.setArrays();
      } catch (error) {
        console.error("Error fetching bitcoin data:", error);
      }
    },
  },
};
</script>
