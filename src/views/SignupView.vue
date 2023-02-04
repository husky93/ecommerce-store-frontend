<template>
  <PageLayout>
    <div class="signup">
      <h2>Signup</h2>
      <form @submit.prevent="submitForm" method="post">
        <div class="input-group">
          <InputGroup
            label="E-mail:"
            type="email"
            name="username"
            v-model="username"
          />
          <ErrorDisplay :error-array="usernameErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="Password:"
            type="password"
            name="password"
            v-model="password"
          />
          <ErrorDisplay :error-array="passwordErrors" />
        </div>
        <div class="input-group">
          <InputGroup label="Name:" type="text" name="name" v-model="name" />
          <ErrorDisplay :error-array="nameErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="Surname:"
            type="text"
            name="surname"
            v-model="surname"
          />
          <ErrorDisplay :error-array="surnameErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="City:"
            type="text"
            name="city"
            v-model="address.city"
          />
          <ErrorDisplay :error-array="CityErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="Zip-Code:"
            type="text"
            name="zip_code"
            v-model="address.zip_code"
          />
          <ErrorDisplay :error-array="zipErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="Street:"
            type="text"
            name="street"
            v-model="address.street"
          />
          <ErrorDisplay :error-array="streetErrors" />
        </div>
        <div class="input-group">
          <InputGroup
            label="House number:"
            type="text"
            name="house_num"
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
import InputGroup from "../components/InputGroup.vue";
import { signupUser } from "../app/api";

export default {
  components: { PageLayout, ErrorDisplay, InputGroup },
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
        this.$router.push("/login");
      } catch (err) {
        this.error = err.response.data.errors;
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
