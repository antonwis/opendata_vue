<template>
  <div class="container">
    {{citybikes}}
  </div>
</template>

<script>
import { getCityBikes } from "../repository";
export default {
  data() {
    return {
      citybikes: [],
    };
  },
  async mounted() {
    getCityBikes()
      .then((data) => (this.citybikes = data))
      .then(data => console.log(data))
      .catch((err) => console.log(err));
      console.log(this.citybikes);
  },
};
</script>

<style></style>
