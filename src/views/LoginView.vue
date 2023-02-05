<template>
  <PageLayout>
    <div class="login">
      <h2>Login</h2>
      <form method="get" @submit.prevent="submitForm">
        <div class="input-group">
          <InputGroup
            label="E-mail:"
            type="email"
            name="username"
            v-model="usernameValue"
            placeholder="example@email.com"
            required
          />
        </div>
        <div class="input-group">
          <InputGroup
            label="Password:"
            type="password"
            name="password"
            v-model="passwordValue"
            placeholder="**********"
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div v-if="error">
      {{ "response" in error ? error.response.data.message : error.message }}
    </div>
    <div>
      <router-link to="/signup"
        >Not Signed Up yet? Click here to create new account.</router-link
      >
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import InputGroup from "../components/InputGroup.vue";
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
      const { usernameValue, passwordValue } = this;
      if (!usernameValue || !passwordValue) return;
      try {
        const data = await loginUser({
          username: usernameValue,
          password: passwordValue,
        });
        this.$store.dispatch("login", data);
        this.$router.push("/");
      } catch (err) {
        this.error = err;
      }
    },
  },
  components: { PageLayout, InputGroup },
};
</script>
