<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted, getCurrentInstance } from "vue";
const $store = getCurrentInstance().appContext.provides.store;

onMounted(() => {
  $store.dispatch("fetchCategories");
});
</script>

<style>
:root {
  --bg-color: #d9d9d9;
}
body {
  background-color: var(--bg-color);
}
</style>
