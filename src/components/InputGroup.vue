<template>
  <label :for="name">{{ label }}</label>
  <input
    :type="type"
    :name="name"
    :id="name"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["label", "type", "name", "modelValue"],
  emits: ["update:modelValue"],
  inheritAttrs: false,
};
</script>
