<template>
  <figure class="card" @click="goToItemRoute">
    <img :src="item.cover_img" :alt="`${item.title} cover`" class="card_img" />
    <figcaption>{{ item.title }}</figcaption>
    <div class="card_price">{{ price }}$</div>
  </figure>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    price() {
      return (Math.round(this.item.price_gross * 100) / 100).toFixed(2);
    },
  },
  methods: {
    goToItemRoute() {
      this.$router.push(`/items/${this.item._id}`);
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card_img {
  width: 250px;
  height: 300px;
  object-fit: cover;
}
</style>
