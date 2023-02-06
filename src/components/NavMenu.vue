<template>
  <nav>
    <ul>
      <CollapsableList name="Categories" :list="categories" />
    </ul>
  </nav>
</template>

<script>
import { getCategories } from "../app/api";
import CollapsableList from "./CollapsableList.vue";

export default {
  data() {
    return {
      categories: null,
    };
  },
  components: {
    CollapsableList,
  },
  async created() {
    this.categories = await getCategories();
  },
};
</script>
