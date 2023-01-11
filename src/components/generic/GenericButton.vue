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
    @click="emit('onOkClickButton', true)"
  />
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

export interface ButtonProps {
  color?: string;
  dense?: boolean;
  disable?: boolean;
  flat?: boolean;
  icon?: string;
  label?: string | number;
  noCaps?: boolean;
  noWrap?: boolean;
  outline?: boolean;
  padding?: string;
  round?: boolean;
  rounded?: boolean;
  size?: string;
  square?: boolean;
  stack?: boolean;
  textColor?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const emit = defineEmits<{
  (event: 'onOkClickButton', value: boolean): void;
}>();

withDefaults(defineProps<ButtonProps>(), {});
</script>

<style lang="scss" scoped></style>
