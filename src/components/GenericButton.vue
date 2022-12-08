<template>
  <q-btn
    :label="buttonLabel"
    :icon="buttonIcon"
    :no-caps="buttonNoCaps"
    :no-wrap="buttonNoWrap"
    :stack="buttonStack"
    :type="buttonType"
  />
</template>

<script setup lang="ts">
export interface ButtonProps {
  buttonLabel: string | number;
  buttonIcon: string;
  buttonNoCaps: boolean;
  buttonNoWrap: boolean;
  buttonStack: boolean;
  buttonType: string;
}
withDefaults(defineProps<ButtonProps>(), {});
</script>
