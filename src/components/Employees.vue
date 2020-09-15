<template>
  <div class="container">
    <div class="message" v-if="employees">
      <h1 class="is-size-2">Työn_Tekijät</h1>
      <div
        class="message-body"
        v-for="(employee, index) in employees"
        :employee="employee"
        :key="index"
      >
        <h2 class="is-size-4">
          {{ employee.firstName + " " + employee.lastName }}
        </h2>
        <p class="is-size-6">Osoite: {{ employee.address }}</p>
        <p class="is-size-6">puh. koti: {{ employee.phone.home }}</p>
        <p class="is-size-6" v-if="employee.phone.work">
          puh. työ: {{ employee.phone.work }}
        </p>
      </div>
    </div>
    <div class="message">
      <div class="message-header">
        <h1 class="is-size-6">Lisää uusi työntekijä</h1>
      </div>
      <div class="field">
        <input v-model="firstName" type="text" placeholder="Etunimi" />
        <input v-model="lastName" type="text" placeholder="Sukunimi" />
        <input v-model="address" type="text" placeholder="Osoite" />
        <input v-model="homeNr" type="text" placeholder="Kotipuhelin" />
        <input v-model="workNr" type="text" placeholder="Työpuhelin" />
      </div>
      <button class="button is-success is-small" @click="create">
        Lisää työntekijä
      </button>
    </div>
  </div>
</template>

<script>
import { getEmployees, createEmployee } from "../repository.ts";
export default {
  name: "Employees",
  data() {
    return {
      employees: [],
      firstName: "",
      lastName: "",
      address: "",
      homeNr: "",
      workNr: "",
    };
  },
  methods: {
    create() {
      const newData = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phone: { home: this.homeNr, work: this.workNr },
      };
      console.log(newData);
      try {
        createEmployee(newData)
          .then((response) => {
            this.firstName = "";
            this.lastName = "";
            this.address = "";
            this.homeNr = "";
            this.workNr = "";
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error.message);
      }
      location.reload();
    },
  },
  async mounted() {
    getEmployees()
      .then((data) => (this.employees = data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
