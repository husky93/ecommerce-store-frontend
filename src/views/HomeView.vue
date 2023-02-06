<template>
  <PageLayout></PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default {
  components: { PageLayout },
  created() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>
