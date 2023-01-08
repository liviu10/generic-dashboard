<template>
  <q-page class="row items-center justify-evenly">
    Configurations page
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useConfigurationStore } from 'src/stores/configurations';

// Instantiate pinia store
const configurationStore = useConfigurationStore();
// const getAllRecords = computed(() => configurationStore.getAllRecords);
const getSingleRecords = computed(() => configurationStore.getSingleRecord);
onMounted(() => configurationStore.fetchAllOrSingle('account-types', 1));
</script>

<style lang="scss" scoped></style>
