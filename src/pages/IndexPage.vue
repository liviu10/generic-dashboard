<template>
  <q-page class="row items-center justify-evenly">
    <GenericButton
      buttonLabel="Generic button"
      buttonIcon="done"
      :buttonNoCaps="false"
      :buttonNoWrap="true"
      :buttonStack="false"
      buttonType="button"
    >
    </GenericButton>
  </q-page>
</template>

<script setup lang="ts">
import GenericButton from 'src/components/GenericButton.vue';
</script>
