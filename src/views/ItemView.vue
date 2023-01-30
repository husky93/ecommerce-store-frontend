<template>
  <PageLayout>
    <div class="store">
      <h1>This is an item page with id: {{ $route.params.id }}</h1>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default {
  components: { PageLayout },
};
</script>
