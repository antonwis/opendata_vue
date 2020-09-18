<template>
  <div class="container">
    <div class="message" v-if="employees">
      <h1 class="is-size-2">Työn_Tekijät</h1>
      <div
        class="message"
        v-for="(employee, index) in employees"
        :employee="employee"
        :key="index"
      >
        <ul>
          <li class="is-size-4">
            {{ employee.firstName + " " + employee.lastName }}
          </li>
          <li class="is-size-6">Osoite: {{ employee.address }}</li>
          <li class="is-size-6">puh. koti: {{ employee.phone.home }}</li>
          <li class="is-size-6" v-if="employee.phone.work">
            puh. työ: {{ employee.phone.work }}
          </li>
        </ul>
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

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getEmployees, createEmployee } from "../repository";

@Options({})
export default class Employees extends Vue {
  private employees: unknown = [];
  private firstName = "";
  private lastName = "";
  private address = "";
  private homeNr = "";
  private workNr = "";

  public create(): void {
    const newData = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: { home: this.homeNr, work: this.workNr }
    };
    console.log(newData);

    createEmployee(newData)
      .then(() => {
        this.firstName = "";
        this.lastName = "";
        this.address = "";
        this.homeNr = "";
        this.workNr = "";
      })
      .catch(err => console.log(err));

    location.reload();
  }

  async mounted() {
    getEmployees()
      .then(data => (this.employees = data.data))
      .catch(err => console.log(err));
  }
}
</script>

<style></style>
