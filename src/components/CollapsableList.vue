<template>
  <li :id="`menu-item-${name.toLowerCase()}`">
    {{ name }}
    <ul :aria-labelledby="`menu-item-${name.toLowerCase()}`">
      <li v-for="item in list" :key="item._id">
        <router-link :to="`/categories/${item._id}`">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["list", "name"],
};
</script>
