<template>
  <q-inner-loading
    :label="label"
    :label-class="labelClass"
    :label-style="labelStyle"
    :showing="showing"
    :size="size"
    :color="color"
    :dark="dark"
  />
</template>

<script setup lang="ts">
export interface InnerLoadingProps {
  label?: string;
  labelClass?: string;
  labelStyle?: string | [] | object;
  showing: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | undefined;
  color?: string;
  dark?: boolean;
}

withDefaults(defineProps<InnerLoadingProps>(), {});
</script>

<style lang="scss" scoped></style>
