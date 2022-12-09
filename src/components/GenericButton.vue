<template>
  <q-btn
    :label="buttonLabel"
    :icon="buttonIcon"
    :no-caps="buttonNoCaps"
    :no-wrap="buttonNoWrap"
    :stack="buttonStack"
    :type="buttonType"
    :disable="buttonDisable"
    :size="buttonSize"
    :outline="buttonOutline"
    :flat="buttonFlat"
    :rounded="buttonRounded"
    :square="buttonSquare"
    :padding="buttonPadding"
    :color="buttonColor"
    :text-color="buttonTextColor"
    :dense="buttonDense"
    :round="buttonRound"
  />
</template>

<script setup lang="ts">
interface ButtonProps {
  buttonLabel: string | number;
  buttonIcon?: string;
  buttonNoCaps?: boolean;
  buttonNoWrap?: boolean;
  buttonStack?: boolean;
  buttonType?: string;
  buttonDisable?: boolean;
  buttonSize?: string;
  buttonOutline?: boolean;
  buttonFlat?: boolean;
  buttonRounded?: boolean;
  buttonSquare?: boolean;
  buttonPadding?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonDense?: boolean;
  buttonRound?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  buttonLabel: 'Standard button',
});
</script>

<style lang="scss" scoped>
.q-btn {
  display: unset;
  position: unset;
  vertical-align: unset;
  font-size: 16px !important;
  line-height: normal;
  font-weight: 400;
}
</style>
