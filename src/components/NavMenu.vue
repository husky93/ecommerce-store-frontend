<template>
  <nav>
    <ul>
      <KeepAlive>
        <CollapsableList name="Categories" :list="categories" />
      </KeepAlive>
    </ul>
  </nav>
</template>

<script>
import CollapsableList from "./CollapsableList.vue";

export default {
  components: {
    CollapsableList,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
