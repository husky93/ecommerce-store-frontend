<template>
  <PageLayout>
    <div class="cart">
      <h1>This is a cart page</h1>
      <section class="cart_display">
        <CartItem v-for="item in cart" :item="item" :key="item.cart_id" />
      </section>
      <CartUi />
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import CartItem from "../components/cart/CartItem.vue";
import CartUi from "../components/cart/CartUi.vue";

export default {
  components: { PageLayout, CartItem, CartUi },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
