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
    <q-list>
      <q-item
        v-for="item in dropdownItems"
        :key="item.id"
        :clickable="dropdownButtonClickable"
        v-close-popup
        @click="emit('onDropdownActionClick', true)"
      >
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

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
  dropdownItems: {
    id: number,
    name: string,
  }[];
  dropdownButtonClickable: boolean;

}

const emit = defineEmits<{
  (event: 'onDropdownActionClick', value: boolean): void;
}>();

withDefaults(defineProps<DropdownButtonProps>(), {});
</script>

<style lang="scss" scoped></style>
