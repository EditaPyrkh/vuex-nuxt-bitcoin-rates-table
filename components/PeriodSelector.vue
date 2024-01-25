<template>
  <div>
    <label for="period">Выберите период:</label>
    <select id="period" v-model="selectedPeriod" @change="setSelectedPeriod">
      <option value="day">День</option>
      <option value="week">Неделя</option>
      <option value="month">Месяц</option>
      <option value="year">Год</option>
      <option value="custom">Свой период</option>
    </select>
    <input
      type="date"
      v-if="selectedPeriod === 'custom'"
      v-model="datePeriod.startDate"
      @change="handleCustomChange"
    />
    <input
      type="date"
      v-if="selectedPeriod === 'custom'"
      v-model="datePeriod.endDate"
      @change="handleCustomChange"
    />
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      selectedPeriod: "day",
      datePeriod: {
        startDate: "",
        endDate: "",
      },
    };
  },
  mounted() {
    this.setSelectedPeriod();
  },
  methods: {
    setSelectedPeriod() {
      let currentDate = moment();
      this.datePeriod.endDate = currentDate.format("YYYY-MM-DD");

      switch (this.selectedPeriod) {
        case "day":
          this.datePeriod.startDate = currentDate.format("YYYY-MM-DD");
          break;
        case "week":
          this.datePeriod.startDate = currentDate
            .subtract(1, "weeks")
            .format("YYYY-MM-DD");
          break;
        case "month":
          this.datePeriod.startDate = currentDate
            .subtract(1, "months")
            .format("YYYY-MM-DD");
          break;
        case "year":
          this.datePeriod.startDate = currentDate
            .subtract(1, "years")
            .format("YYYY-MM-DD");
          break;
      }
      if (this.selectedPeriod !== "custom") {
        this.handleChange();
      }
    },
    handleChange() {
      if (this.selectedPeriod !== "custom") {
        this.$emit("change", this.datePeriod);
      }
    },
    handleCustomChange() {
      if (this.selectedPeriod === "custom") {
        this.$emit("change", this.datePeriod);
      }
    },
  },
};
</script>
