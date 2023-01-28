<template>
  <div class="StockPrices">
    <Main msg="Welcome to Stock Ticker Assessment" />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import { ref, computed } from "vue";
import axios from "axios";

let stockMarketHistory = [];
let stockMarketHistoryDates = [];
let stockMarketHistoryEpochDates = [];
let stockMarketHistoryPrices = [];

stockMarketHistoryDates;
stockMarketHistoryEpochDates;
stockMarketHistoryPrices;

export default {
  name: "StockPrices",
  mounted() {
    this.createStockPriceHistory();
  },
  components: {
    Main,
  },
  setup() {
    let stockSympol = ref("IBM");

    let AlphaVentage_URL = computed(() => {
      return (
        "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" +
        stockSympol.value +
        "&apikey=Z050JS6XSMA6GUJQ"
      );
    });

    console.log(AlphaVentage_URL.value);

    let createStockPriceHistory = (dateRange) => {
      axios.get(AlphaVentage_URL.value).then((res) => {
        stockMarketHistory = res;

        console.log(stockMarketHistory.data["Monthly Adjusted Time Series"]);

        dateRange;
      });
    };
    return {
      createStockPriceHistory,
    };
  },
};
</script>
