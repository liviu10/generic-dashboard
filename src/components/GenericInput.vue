<template>
  <q-input
    :model-value="inputModel"
    :label="inputLabel"
  />
</template>

<script setup lang="ts">
interface InputProps {
  inputModel?: string;
  inputLabel: string;
}
withDefaults(defineProps<InputProps>(), {});
</script>

<style lang="scss" scoped>
.q-input {
}
</style>
