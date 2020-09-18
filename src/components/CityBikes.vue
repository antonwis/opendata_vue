<template>
  <div class="container">
    <div class="table-container">
      <table
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <thead>
          <tr>
            <th>Station name</th>
            <th>Free bikes</th>
            <th>Empty slots</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="station in bikedata" :key="station">
            <td>{{ station.name }}</td>
            <td>{{ station.free_bikes }}</td>
            <td>{{ station.empty_slots }}</td>
            <td>{{ station.latitude }}</td>
            <td>{{ station.longitude }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getCityBikes } from "../repository";

@Options({})
export default class CityBikes extends Vue {
  private bikedata: unknown = [];
  private stationData: unknown = [];

  public setData(data: any) {
    this.bikedata = data;
    //this.stationData = data.network.stations;
    console.log(data);
  }
  beforeCreate() {
    console.log("beforecreate");
    getCityBikes()
      .then(data => this.setData(data.network.stations))
      .catch(err => console.log(err));
  }
}
</script>

<style></style>
