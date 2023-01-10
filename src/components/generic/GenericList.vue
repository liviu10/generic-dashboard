<template>
  <q-list
    :separator="separator"
    :bordered="bordered"
    :dense="dense"
    :dark="dark"
  >
    <q-item
      v-for="item in listItems"
      :key="item.id"
      :disable="itemDisable"
      :active="itemActive"
      :clickable="itemClickable"
      :dark="itemDark"
      :dense="itemDense"
      :v-ripple="itemRipple"
      @click="emit('onActionClickItem', true)"
    >
      <q-item-section>
        <q-item-label
          :overline="itemLabelOverline"
          :caption="itemLabelCaption"
          :header="itemLabelHeader"
          :lines="itemLabelLines"
        >
          {{ item.name }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

export interface ListProps {
  separator: boolean;
  bordered: boolean;
  dense?: boolean;
  dark?: boolean;
  itemDisable?: boolean;
  itemActive?: boolean;
  itemClickable: boolean;
  itemDark?: boolean;
  itemDense?: boolean;
  itemRipple?: boolean;
  itemLabelOverline?: boolean;
  itemLabelCaption?: boolean;
  itemLabelHeader?: boolean;
  itemLabelLines?: number | string;
  listItems: {
    id: number;
    name: string;
  }[];
}

const emit = defineEmits<{
  (event: 'onActionClickItem', value: boolean): void;
}>();

withDefaults(defineProps<ListProps>(), {});
</script>

<style lang="scss" scoped>
.q-menu {
  border-radius: 0rem;
}
</style>
