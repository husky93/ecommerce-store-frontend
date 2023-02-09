<template>
  <router-link to="/cart">
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    <span>{{ cartQuantity }}</span>
  </router-link>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.state.cart.length;
    },
  },
};
</script>
