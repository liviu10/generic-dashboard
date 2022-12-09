<template>
  <q-icon :name="iconName" :size="iconSize" :color="iconColor" />
</template>

<script setup lang="ts">
interface IconProps {
  iconName: string;
  iconSize?: string;
  iconColor?: string;
}
withDefaults(defineProps<IconProps>(), {});
</script>

<style lang="scss" scoped>
.q-icon {
  display: unset;
  position: unset;
  line-height: normal;
}
</style>
