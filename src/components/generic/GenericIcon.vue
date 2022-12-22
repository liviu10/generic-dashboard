<template>
  <q-icon :size="size" :name="name" />
</template>

<script setup lang="ts">
export interface IconProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | undefined;
  name: string;
  cssClass?: 'q-icon--square' | 'q-icon--round' | undefined;
}

withDefaults(defineProps<IconProps>(), {});
</script>

<style lang="scss" scoped></style>
