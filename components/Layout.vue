<template>
  <div>
    <Header />
    <main class="main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
