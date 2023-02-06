<template>
  <header class="header">
    <div class="header_top">
      <router-link to="/"><h1>Shop</h1></router-link>
      <UserUi />
    </div>
    <NavMenu />
  </header>
</template>

<script>
import UserUi from "./UserUi.vue";
import NavMenu from "./NavMenu.vue";
export default {
  components: {
    UserUi,
    NavMenu,
  },
};
</script>

<style scoped>
.header_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
