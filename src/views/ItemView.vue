<template>
  <PageLayout>
    <div class="store">
      <h1>This is an item page with id: {{ $route.params.id }}</h1>
      {{ JSON.stringify(data) }}
    </div>
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
};
</script>
