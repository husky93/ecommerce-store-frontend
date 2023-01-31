<template>
  <PageLayout>
    <div class="login">
      <h2>Login</h2>
      <form method="get" @submit.prevent="submitForm">
        <div class="input-group">
          <label for="username">E-mail:</label>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="example@email.com"
            required
            v-model="usernameValue"
          />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            required
            v-model="passwordValue"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div v-if="error">{{ error.response.data.message }}</div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import { loginUser } from "../app/api";

export default {
  data() {
    return {
      usernameValue: "",
      passwordValue: "",
      error: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        const data = await loginUser({
          username: this.usernameValue,
          password: this.passwordValue,
        });
      } catch (err) {
        this.error = err;
      }
    },
  },
  components: { PageLayout },
};
</script>
