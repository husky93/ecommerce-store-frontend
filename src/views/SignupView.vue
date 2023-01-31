<template>
  <PageLayout>
    <div class="signup">
      <h2>Signup</h2>
      <form @submit.prevent="submitForm" method="post">
        <div class="input-group">
          <label for="username">E-mail:</label>
          <input
            type="email"
            name="username"
            id="username"
            v-model="username"
          />
          <ErrorDisplay :error-array="usernameErrors" />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
          <ErrorDisplay :error-array="passwordErrors" />
        </div>
        <div class="input-group">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="name" />
          <ErrorDisplay :error-array="nameErrors" />
        </div>
        <div class="input-group">
          <label for="surname">Surname:</label>
          <input type="text" name="surname" id="surname" v-model="surname" />
          <ErrorDisplay :error-array="surnameErrors" />
        </div>
        <div class="input-group">
          <label for="city">City:</label>
          <input type="text" name="city" id="city" v-model="address.city" />
          <ErrorDisplay :error-array="CityErrors" />
        </div>
        <div class="input-group">
          <label for="zip_code">Zip-Code:</label>
          <input
            type="number"
            name="zip_code"
            id="zip_code"
            v-model="address.zip_code"
          />
          <ErrorDisplay :error-array="zipErrors" />
        </div>
        <div class="input-group">
          <label for="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            v-model="address.street"
          />
          <ErrorDisplay :error-array="streetErrors" />
        </div>
        <div class="input-group">
          <label for="house_num">House number:</label>
          <input
            type="text"
            name="house_num"
            id="house_num"
            v-model="address.house_num"
          />
          <ErrorDisplay :error-array="houseNumErrors" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div v-if="error">
        {{ "response" in error ? error.response.data.message : error.message }}
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import ErrorDisplay from "../components/ErrorDisplay.vue";
import { signupUser } from "../app/api";

export default {
  components: { PageLayout, ErrorDisplay },
  data() {
    return {
      username: "",
      password: "",
      name: "",
      surname: "",
      address: {
        city: "",
        zip_code: "",
        street: "",
        house_num: "",
      },
      error: null,
    };
  },
  methods: {
    async submitForm() {
      const { username, password, name, surname, address } = this;
      try {
        await signupUser({ username, password, name, surname, address });
      } catch (err) {
        this.error = err.response.data.errors;
        console.log(err);
      }
    },
    filterErrors(error, param) {
      return error ? this.error.filter((item) => item.param === param) : null;
    },
  },
  computed: {
    usernameErrors: function () {
      return this.filterErrors(this.error, "username");
    },
    passwordErrors: function () {
      return this.filterErrors(this.error, "password");
    },
    nameErrors: function () {
      return this.filterErrors(this.error, "name");
    },
    surnameErrors: function () {
      return this.filterErrors(this.error, "surname");
    },
    cityErrors: function () {
      return this.filterErrors(this.error, "address.city");
    },
    zipErrors: function () {
      return this.filterErrors(this.error, "address.zip_code");
    },
    streetErrors: function () {
      return this.filterErrors(this.error, "address.street");
    },
    houseNumErrors: function () {
      return this.filterErrors(this.error, "address.house_num");
    },
  },
};
</script>
