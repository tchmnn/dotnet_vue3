<template>
  <div>
    <h1 id="tableLabel">Weather forecast</h1>
    <p>This component demonstrates fetching data from the server.</p>
    <table v-if="forecasts" class='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="forecast in forecasts" :key="forecast.date">
          <td>{{forecast.date}}</td>
          <td>{{forecast.temperatureC}}</td>
          <td>{{forecast.temperatureF}}</td>
          <td>{{forecast.summary}}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>
      <em>Loading...</em>
    </p>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'FetchData',
  setup() {
    const forecasts = ref(null);

    async function fetchWeatherForecasts() {
      const response = await fetch(`weatherforecast`);
      const json = await response.json();
      return json;
    }

    onMounted(async () => {
      forecasts.value = await fetchWeatherForecasts();
    })

    return { forecasts };
  }
}
</script>