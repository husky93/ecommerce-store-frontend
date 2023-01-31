<template>
  <PageLayout>
    <div class="login">
      <h2>Login</h2>
      <form method="get" @submit.prevent="submitForm"></form>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default {
  components: { PageLayout },
  methods: {
    submitForm() {},
  },
};
</script>
