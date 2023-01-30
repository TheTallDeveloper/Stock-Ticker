<template>
  <div class="FxPairs">
    <h1>This is FX Pairs page </h1>

    <div class="container">
    <v-text-field
  label="Fx Pairs"
  placeholder="Enter FX Pairs"
  
></v-text-field>
    <v-btn variant="outlined" @click="addToFX()">
  Add FX Pairs
</v-btn>
  </div>
  </div>
</template>

<script>
export default{
  name:"FxPairs",
  methods: {
    addToFX(){
      console.log("added to fx");
    }
  }
}


</script>
