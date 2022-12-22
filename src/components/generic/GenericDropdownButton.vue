<template>
  <q-btn-dropdown
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
  >
    <GenericList
      :separator="dropdownList.separator"
      :bordered="dropdownList.bordered"
      :itemClickable="dropdownList.itemClickable"
      :listItems="dropdownList.listItems"
    />
  </q-btn-dropdown>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

// Import necessary components
import GenericList, { ListProps } from 'src/components/generic/GenericList.vue';

export interface DropdownButtonProps {
  label: string | number;
  icon?: string;
  noCaps?: boolean;
  noWrap?: boolean;
  stack?: boolean;
  type: string;
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
  dropdownList: ListProps;
}

const emit = defineEmits<{
  (event: 'onDropdownActionClick', value: boolean): void;
}>();

withDefaults(defineProps<DropdownButtonProps>(), {});
</script>

<style lang="scss" scoped></style>
