<template>
  <nav>
    <ul>
      <CollapsableList name="Categories" />
    </ul>
  </nav>
</template>

<script>
import CollapsableList from "./CollapsableList.vue";
export default {
  components: {
    CollapsableList,
  },
};
</script>
