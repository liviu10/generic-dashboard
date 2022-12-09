<template>
  <q-list
    :separator="listSeparator"
    :padding="listPadding"
    :bordered="listBordered"
    :dense="listDense"
    :listItemSection="listItemSection"
  >
    <q-item
      v-for="item in listItemSection"
      :key="item.id"
      :disable="item.itemProps?.disable"
      :clickable="item.itemProps?.clickable"
    >
      <q-item-section>
        <q-item-label>
          {{ item.content }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
interface ListProps {
  listSeparator?: boolean;
  listPadding?: boolean;
  listBordered?: boolean;
  listDense?: boolean;
  listItemSection: {
    id: number;
    content: string;
    itemProps?: {
      disable?: boolean;
      active?: boolean;
      clickable?: boolean;
      manualFocus?: boolean;
      focused?: boolean;
      dense?: boolean;
    };
    itemLabelProps?: {
      overline?: boolean;
      caption?: boolean;
      header?: boolean;
    };
  }[];
}
withDefaults(defineProps<ListProps>(), {});
</script>

<style lang="scss" scoped>
.q-icon {
  display: unset;
  position: unset;
  line-height: normal;
}
</style>
