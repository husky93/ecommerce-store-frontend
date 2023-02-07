<template>
  <ItemCard v-for="item in items" :key="item._id" />
</template>

<script>
import ItemCard from "./ItemCard.vue";
export default {
  components: {
    ItemCard,
  },
  props: {
    items: Array,
  },
};
</script>
