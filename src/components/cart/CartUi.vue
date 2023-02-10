<template>
  <aside class="cart_ui">
    <h2>Payment</h2>
    <div class="cart_ui_group">
      <span>Products Value:</span>
      <span>{{ totalPrice }}$</span>
    </div>
    <div class="cart_ui_group">
      <span>Delivery:</span>
      <span>free</span>
    </div>
    <div class="cart_ui_group">
      <span>Total:</span>
      <span>{{ totalPrice }}$</span>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.cart
        .reduce(
          (prevVal, item) => prevVal + Math.round(item.price_gross * 100) / 100,
          0
        )
        .toFixed(2);
    },
  },
};
</script>
