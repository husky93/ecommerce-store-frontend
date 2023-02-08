<template>
  <PageLayout>
    <div class="item" v-if="data">
      <h1>This is an item page with id: {{ $route.params.id }}</h1>
      <img :src="data.cover_img" />
      <div class="container">
        <div class="left">
          <h2>Description:</h2>
          <p>{{ data.description }}</p>
        </div>
        <div class="right">
          <div class="price">
            <span>{{ price }}$</span>
          </div>
          <CustomButton text="Add to cart" @click="addToCart" />
        </div>
      </div>
    </div>
    <div class="error" v-if="!data">Error 404. Item not found.</div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import { getItemById } from "../app/api";
import { useWatchParams } from "../composition";
import CustomButton from "../components/CustomButton.vue";

export default {
  setup() {
    const { data } = useWatchParams({
      fetch: getItemById,
    });
    return { data };
  },
  components: { PageLayout, CustomButton },
  computed: {
    price() {
      return (Math.round(this.data.price_gross * 100) / 100).toFixed(2);
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addItemToCart", this.data);
      console.log(this.$store.state.cart);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
