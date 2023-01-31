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
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </div>
        <div class="input-group">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="name" />
        </div>
        <div class="input-group">
          <label for="surname">Surname:</label>
          <input type="text" name="surname" id="surname" v-model="surname" />
        </div>
        <div class="input-group">
          <label for="city">City:</label>
          <input type="text" name="city" id="city" v-model="address.city" />
        </div>
        <div class="input-group">
          <label for="zip_code">Zip-Code:</label>
          <input
            type="number"
            name="zip_code"
            id="zip_code"
            v-model="address.zip_code"
          />
        </div>
        <div class="input-group">
          <label for="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            v-model="address.street"
          />
        </div>
        <div class="input-group">
          <label for="house_num">House number:</label>
          <input
            type="text"
            name="house_num"
            id="house_num"
            v-model="address.house_num"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default {
  components: { PageLayout },
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
    };
  },
  methods: {
    async submitForm() {},
  },
};
</script>
