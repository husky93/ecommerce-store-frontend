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

<style lang="scss"></style>
