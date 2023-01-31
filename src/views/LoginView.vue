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
            v-model="passwordValue"
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
  data() {
    return {
      usernameValue: "",
      passwordValue: "",
    };
  },
  methods: {
    submitForm() {},
  },
  components: { PageLayout },
};
</script>
