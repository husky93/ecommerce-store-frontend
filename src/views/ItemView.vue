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
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    console.log(route.params.id);
    const { data } = useFetchData({
      id: route.params.id,
      fetch: getItemById,
    });
    return { data };
  },
  components: { PageLayout },
};
</script>
