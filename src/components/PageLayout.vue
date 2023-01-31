<template>
  <PageHeader />
  <main class="main" id="main">
    <slot></slot>
  </main>
  <PageFooter />
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style scoped>
.main {
  flex: 1;
}
</style>
