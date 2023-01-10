<template>
  <q-page class="row items-center justify-evenly">
    Files page
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useFileStore } from 'src/stores/files';

// Import necessary interfaces
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

// Instantiate pinia store
const fileStore = useFileStore();
// const getAllRecords = computed((): StoreApiResponseInterface['data'] => fileStore.getAllRecords);
const getSingleRecords = computed((): StoreApiResponseInterface['data'] => fileStore.getSingleRecord);
onMounted(() => fileStore.fetchAllOrSingle('accounts', 1));
</script>

<style lang="scss" scoped></style>
