<template>
  <div id="app">
    <ExcelUploader></ExcelUploader>
  </div>
</template>

<script>
import ExcelUploader from "@/components/ExcelUploader";

export default {
  name: 'app',
  components: {
    ExcelUploader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
