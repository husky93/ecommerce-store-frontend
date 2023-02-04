<template>
  <div>
    <CustomButton class="primary" text="Sign up" />
    <CustomButton class="primary" text="Login" />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
};
</script>
