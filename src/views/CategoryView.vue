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
export default {
  components: { PageLayout },
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
};
</script>
