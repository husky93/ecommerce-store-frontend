<template>
  <div>{{ username }}</div>
</template>

<script>
export default {
  computed: {
    username() {
      return `${this.$store.state.user.user.name} ${this.$store.state.user.user.surname}`;
    },
  },
};
</script>
