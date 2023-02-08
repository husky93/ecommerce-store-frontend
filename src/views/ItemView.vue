<template>
  <PageLayout>
    <div class="store" v-if="data">
      <h1>This is an item page with id: {{ $route.params.id }}</h1>
      <img :src="data.cover_img" />
    </div>
    <div v-if="!data">Error 404. Item not found.</div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import { getItemById } from "../app/api";
import { useFetchData } from "../composition";

export default {
  setup() {
    const { data } = useFetchData({
      fetch: getItemById,
    });
    return { data };
  },
  components: { PageLayout },
  computed: {
    price() {
      return (Math.round(this.data.price_gross * 100) / 100).toFixed(2);
    },
  },
};
</script>
