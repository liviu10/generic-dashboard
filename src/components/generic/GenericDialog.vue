<template>
  <q-dialog
    v-model="displayDialog"
    :persistent="persistent"
    :maximized="maximized"
    :full-width="fullWidth"
    :full-height="fullHeight"
    :position="position"
    :square="square"
  >
    <GenericCard
      :cardTitle="card?.cardTitle"
      :cardBody="card?.cardBody"
      :displayActionButtons="card?.displayActionButtons"
      :firstActionButton="{
        label: card?.firstActionButton?.label,
        type: card?.firstActionButton?.type,
      }"
      :secondActionButton="{
        label: card?.secondActionButton?.label,
        type: card?.secondActionButton?.type,
      }"
      @onActionClose="$emit('onCloseClickDialog', true)"
      @onActionOk="$emit('onOkClickDialog', true)"
    />
  </q-dialog>
</template>

<script setup lang="ts">
// Import framework related utilities
import { Ref, ref, defineEmits } from 'vue';

// Import necessary components and interfaces
import GenericCard, { CardProps } from 'src/components/generic/GenericCard.vue';

export interface DialogProps {
  displayDialog: boolean;
  persistent: boolean;
  maximized?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  position?: 'standard' | 'top' | 'right' | 'bottom' | 'left' | undefined;
  square?: boolean;
  card: CardProps;
}

let displayDialog: Ref<boolean> = ref(false);
displayDialog.value = true;
defineEmits<{
  (event: 'onCloseClickDialog', value: boolean): void;
  (event: 'onOkClickDialog', value: boolean): void;
}>();

withDefaults(defineProps<DialogProps>(), {});
</script>

<style lang="scss" scoped></style>
