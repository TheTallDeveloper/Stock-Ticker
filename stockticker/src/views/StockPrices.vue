<template>
  <div class="StockPrices">
    <Main msg="Welcome to Stock Ticker Assessment" />
  </div>
  <div class="container">
    <v-text-field
      label="Stock Price"
      placeholder="Enter Stock Price"
      
    ></v-text-field>
    <v-btn variant="outlined" @click="addToStock()"> Add Stock Price </v-btn>
  </div>
  <div class="middle-container">
    <div class="left-side">
      <h3 class="green" v-if="close > open">{{ close }}</h3>
      <h3 class="red" v-if="open > close">{{ close }}</h3>
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
    this.close = 9.9;
    this.low = 70.1;
    this.high = 93.5;

  },
  methods: {
    addToStock() {
      console.log("Added to Stock");

    },
  },

  setup() {
    let AlphaVentage_URL = computed(() => {
      return "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=Z050JS6XSMA6GUJQ";
    });

    let createStockPriceHistory = (dateRange) => {
      axios
        .get(AlphaVentage_URL.value)
        .then((res) => {
          stockMarketHistory = res;

          console.log(stockMarketHistory.data["Time Series (Daily)"])[
            "2022-09-06"
          ];
          this.prices = Object.keys(res.data[4]);
          console.log(this.prices.toString());

          //Formatting the Date form the API

          // for (const property in stockMarketHistory.data[
          //   "Time Series (Daily)"
          // ]) {
          //   let closingPrice =
          //     stockMarketHistory.data["Time Series (Daily)"][property][
          //       "4.close"
          //     ];
          //   let closingDateMonth = property.split("-")[1];
          //   let closingDateYear = property.split("-")[0];
          //   let closingDateDay = property.split("-")[2];
          //   let closingDateFormatted = `${closingDateMonth}/${closingDateDay}/${closingDateYear}`;
          //   // let closingDateEpochTime = Date.parse(closingDateFormatted) / 1000;
          // }

          dateRange;
        })
        .then(() => {
          let now = Date.now() / 1000;
          let dateRange = now - dateRange;
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
  background-color: #cce5ff;
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

.red{
  color: red;
}
</style>
