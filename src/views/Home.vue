<template>
  <div class="home">
    <Employees />
    <CityBikes />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Employees from "@/components/Employees.vue";

@Options({
  components: {
    Employees
  }
})
export default class Home extends Vue {}
</script>
