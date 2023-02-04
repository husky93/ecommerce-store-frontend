<template>
  <div>
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
};
</script>
