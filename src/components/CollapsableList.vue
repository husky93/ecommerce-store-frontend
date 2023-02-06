<template>
  <ul>
    <li v-for="item in list" :key="item._id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>
