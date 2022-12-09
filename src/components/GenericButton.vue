<template>
  <q-btn
    :label="contentProps.label"
    :icon="contentProps.icon"
    :no-caps="contentProps.noCaps"
    :no-wrap="contentProps.noWrap"
    :stack="contentProps.stack"
    :type="type"
    :disable="disable"
    :size="sizeProps?.size"
    :outline="sizeProps?.outline"
    :flat="sizeProps?.flat"
    :rounded="sizeProps?.rounded"
    :square="sizeProps?.square"
    :padding="sizeProps?.padding"
    :color="sizeProps?.color"
    :text-color="sizeProps?.textColor"
    :dense="sizeProps?.dense"
    :round="sizeProps?.round"
  />
</template>

<script setup lang="ts">
interface ButtonProps {
  contentProps: {
    label: string | number;
    icon?: string;
    noCaps?: boolean;
    noWrap?: boolean;
    stack?: boolean;
  };
  type: string;
  disable?: boolean;
  sizeProps?: {
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
}
withDefaults(defineProps<ButtonProps>(), {});
</script>

<style lang="scss" scoped>
.q-btn {
  display: unset;
  vertical-align: unset;
  font-size: 16px !important;
  line-height: normal;
  font-weight: 400;
}
</style>
