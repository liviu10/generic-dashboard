<template>
  <q-badge :label="label" :rounded="rounded" />
</template>

<script setup lang="ts">
interface BadgeProps {
  floating?: boolean;
  multiLine?: boolean;
  label: string | number;
  align?: string;
  color?: string;
  textColor?: string;
  transparent?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

withDefaults(defineProps<BadgeProps>(), {});
</script>

<style lang="scss" scoped>
@import 'src/css/utilities/_rem_convertor.scss';
.q-badge {
  border-radius: 0rem;
  padding: rem-convertor(5px);
}
</style>
