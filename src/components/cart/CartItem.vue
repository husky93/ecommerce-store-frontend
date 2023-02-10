<template>
  <div class="cart_item">
    {{ item.title }}
    <span>{{ price }}$</span>
    <button @click="$store.dispatch('removeItemFromCart', item.cart_id)">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    price() {
      return (Math.round(this.item.price_gross * 100) / 100).toFixed(2);
    },
  },
};
</script>
