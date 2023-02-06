<template>
  <li :id="`menu-item-${name}`">
    {{ name }}
    <ul :aria-labelledby="`menu-item-${name}`">
      <li v-for="item in list" :key="item._id">{{ item.name }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["list", "name"],
};
</script>
