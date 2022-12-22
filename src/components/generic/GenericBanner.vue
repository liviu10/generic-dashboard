<template>
  <q-banner>
    {{ content }}
    <template v-slot:action v-if="displayActionButtons">
      <GenericButton
        v-if="firstActionButton"
        :label="firstActionButton.label"
        :type="firstActionButton.type"
        @click="emit('onOkClick', true)"
      />
      <GenericButton
        v-if="secondActionButton"
        :label="secondActionButton.label"
        :type="secondActionButton.type"
        @click="emit('onCancelClick', true)"
      />
    </template>
  </q-banner>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

// Import necessary components
import GenericButton, { ButtonProps } from 'src/components/generic/GenericButton.vue';

export interface BannerProps {
  inlineActions?: boolean;
  dense?: boolean;
  rounded?: boolean;
  dark?: boolean;
  content: string;
  displayActionButtons: boolean;
  firstActionButton?: ButtonProps;
  secondActionButton?: ButtonProps;
}

const emit = defineEmits<{
  (event: 'onOkClick', value: boolean): void;
  (event: 'onCancelClick', value: boolean): void;
}>();

withDefaults(defineProps<BannerProps>(), {});
</script>

<style lang="scss" scoped>
@import 'src/css/utilities/_rem_convertor.scss';
.q-banner {
  padding-top: rem-convertor(8px);
}
</style>
