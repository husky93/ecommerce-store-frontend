<template>
  <div class="user_ui not_authenticated" v-if="!isAuthenticated">
    <CustomButton
      class="primary"
      text="Sign up"
      @click="redirectTo(signupLink)"
    />
    <CustomButton class="primary" text="Login" @click="redirectTo(loginLink)" />
    <HeaderCart />
  </div>
  <div class="user_ui authenticated" v-if="isAuthenticated">
    <UserInfo />
    <HeaderCart />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import UserInfo from "./UserInfo.vue";
import HeaderCart from "./HeaderCart.vue";

export default {
  data() {
    return {
      signupLink: "/signup",
      loginLink: "/login",
    };
  },
  components: {
    CustomButton,
    UserInfo,
    HeaderCart,
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
