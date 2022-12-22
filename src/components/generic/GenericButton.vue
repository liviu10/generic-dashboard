<template>
  <q-btn
    :label="label"
    :icon="icon"
    :no-caps="noCaps"
    :no-wrap="noWrap"
    :stack="stack"
    :type="type"
    :disable="disable"
    :size="size"
    :outline="outline"
    :flat="flat"
    :rounded="rounded"
    :square="square"
    :padding="padding"
    :color="color"
    :text-color="textColor"
    :dense="dense"
    :round="round"
    @click="emit('onActionOk', true)"
  />
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

export interface ButtonProps {
  label: string | number | undefined;
  icon?: string;
  noCaps?: boolean;
  noWrap?: boolean;
  stack?: boolean;
  type: string | undefined;
  disable?: boolean;
  size?: string;
  outline?: boolean;
  flat?: boolean;
  rounded?: boolean;
  square?: boolean;
  padding?: string;
  color?: string;
  textColor?: string;
  dense?: boolean;
  round?: boolean;
}

const emit = defineEmits<{
  (event: 'onActionOk', value: boolean): void;
}>();

withDefaults(defineProps<ButtonProps>(), {});
</script>

<style lang="scss" scoped></style>
