<template>
  <header class="header">
    <h1>Shop</h1>
    <UserUi />
  </header>
</template>

<script>
import UserUi from "./UserUi.vue";
export default {
  components: {
    UserUi,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
