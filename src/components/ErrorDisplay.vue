<template>
  <div v-if="errorArray">
    <p v-for="(item, index) in errorArray" :key="item.param + index">
      {{ item.msg }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["errorArray"],
};
</script>
