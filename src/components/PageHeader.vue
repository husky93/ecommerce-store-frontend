<template>
  <header class="header">
    <router-link to="/"><h1>Shop</h1></router-link>
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
