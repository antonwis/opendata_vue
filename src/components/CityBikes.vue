<template>
  <div class="container">{{ bikedata }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getCityBikes } from "../repository";

@Options({})
export default class CityBikes extends Vue {
  private bikedata: any = [];

  async mounted() {
    console.log("mounted");
    getCityBikes()
      .then((data) => (this.bikedata = data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(this.bikedata);
  }
}
</script>

<style></style>
