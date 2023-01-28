<template>
  <div class="StockPrices">
    <Main msg="Welcome to Stock Ticker Assessment" />
  </div>
  <div class="container">
    <v-text-field
      label="Stock Price"
      placeholder="Enter Stock Price"
    ></v-text-field>
    <v-btn variant="outlined"> Add Stock Price </v-btn>
  </div>
  <div class="middle-container">
    <div class="left-side">
      <h3 class="green">99.9</h3>
    </div>

    <div class="right-side">
      <p>Open:{{ open }}</p>
      <p>Close: {{ close }}</p>
      <p>High: {{ high }}</p>
      <p>Low: {{ low }}</p>
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import { computed } from "vue";
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
  data() {
    this.open = 90.5;
    this.close = 99.9;
    this.low = 70.1;
    this.high = 93.5;
  },

  setup() {
    let AlphaVentage_URL = computed(() => {
      return "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=Z050JS6XSMA6GUJQ";
    });

    console.log(AlphaVentage_URL.value);

    let createStockPriceHistory = (dateRange) => {
      axios.get(AlphaVentage_URL.value).then((res) => {
        stockMarketHistory = res;

        console.log(stockMarketHistory.data["Time Series (Daily)"]);

        dateRange;
      });
    };
    return {
      createStockPriceHistory,
    };
  },
};
</script>

<style scoped>
.middle-container {
  margin-top: 20px;
  display: flex;
  width: 50%;
  background-color: #66ffff;
  margin-left: 350px;
}

.left-side {
  flex: 1;
  margin: 10px;
  margin-right: 250px;
}

.right-side {
  margin-right: 150px;
}
.green {
  color: green;
}
</style>
