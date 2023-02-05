<template>
  <div class="user_ui not_authenticated" v-if="!isAuthenticated">
    <CustomButton
      class="primary"
      text="Sign up"
      @click="redirectTo(signupLink)"
    />
    <CustomButton class="primary" text="Login" @click="redirectTo(loginLink)" />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  data() {
    return {
      signupLink: "/signup",
      loginLink: "/login",
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    redirectTo(link) {
      this.$router.push(link);
    },
  },
  computed: {
    isAuthenticated() {
      return !!this.$store.state.user;
    },
  },
};
</script>
