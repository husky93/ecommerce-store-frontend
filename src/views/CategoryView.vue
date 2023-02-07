<template>
  <PageLayout>
    <div class="category" v-if="category">
      <h1>This is a {{ category.title }} category page</h1>
      <p>{{ category.description }}</p>
    </div>
    <div class="category error" v-if="!category">
      <h1>Error 404</h1>
      <p>Category not found</p>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
import { getCategoryItems } from "../app/api";
export default {
  components: { PageLayout },
  data() {
    return {
      items: null,
    };
  },
  computed: {
    category() {
      const { categories } = this.$store.state;
      if (categories)
        return this.$store.state.categories.find(
          (item) => this.$route.params.id === item._id
        );
      return null;
    },
  },
  async created() {
    if (this.category) this.items = await getCategoryItems(this.category._id);
  },
};
</script>
