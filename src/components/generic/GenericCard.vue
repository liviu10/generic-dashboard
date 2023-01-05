<template>
  <q-card :dark="dark" :square="square" :flat="flat" :bordered="bordered">
    <q-card-section :horizontal="horizontal">
      <div class="text-h6">{{ cardTitle }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ cardBody }}
    </q-card-section>

    <q-separator
      :spaced="cardSeparatorSpaced"
      :inset="cardSeparatorInset"
      :vertical="cardSeparatorVertical"
    />

    <q-card-actions
      v-if="displayActionButtons"
      :align="alignCardActions"
      :vertical="verticalCardActions"
    >
      <GenericButton
        v-if="firstActionButton"
        :label="firstActionButton.label"
        :type="firstActionButton.type"
        @click="emit('onActionClose', true)"
      />
      <GenericButton
        v-if="secondActionButton"
        :label="secondActionButton.label"
        :type="secondActionButton.type"
        @click="emit('onActionOk', true)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

// Import necessary components and interfaces
import GenericButton, { ButtonProps } from 'src/components/generic/GenericButton.vue';

export interface CardProps {
  dark?: boolean;
  square?: boolean;
  flat?: boolean;
  bordered?: boolean;
  horizontal?: boolean;
  cardTitle: string;
  cardBody: string;
  cardSeparatorSpaced?: boolean | string;
  cardSeparatorInset?: boolean | string;
  cardSeparatorVertical?: boolean;
  displayActionButtons: boolean;
  alignCardActions?: 'left' | 'center' | 'right' | 'between' | 'around' | 'evenly' | 'stretch' | undefined;
  verticalCardActions?: boolean;
  firstActionButton?: ButtonProps;
  secondActionButton?: ButtonProps;
}

const emit = defineEmits<{
  (event: 'onActionClose', value: boolean): void;
  (event: 'onActionOk', value: boolean): void;
}>();

withDefaults(defineProps<CardProps>(), {});
</script>

<style lang="scss" scoped></style>
