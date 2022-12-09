<template>
  <q-page class="row items-center justify-evenly">
    <GenericButton
      :buttonLabel="'Generic button'"
      :buttonIcon="'done'"
      :buttonNoCaps="true"
      :buttonNoWrap="true"
      :buttonStack="false"
      :buttonType="'button'"
      :buttonDisable="false"
      :buttonSize="'md'"
      :buttonOutline="false"
      :buttonFlat="false"
      :buttonRounded="false"
      :buttonSquare="true"
      :buttonPadding="'sm'"
      :buttonColor="'primary'"
      :buttonTextColor="'white'"
      :buttonDense="false"
      :buttonRound="false"
    >
    </GenericButton>
  </q-page>
</template>

<script setup lang="ts">
import GenericButton from 'src/components/GenericButton.vue';
</script>
