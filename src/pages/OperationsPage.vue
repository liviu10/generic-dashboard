<template>
  <q-page class="row items-center justify-evenly">
    Operations page
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useOperationStore } from 'src/stores/operations';

// Import necessary interfaces
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

// Instantiate pinia store
const operationStore = useOperationStore();
// const getAllRecords = computed((): StoreApiResponseInterface['data'] => operationStore.getAllRecords);
const getSingleRecords = computed((): StoreApiResponseInterface['data'] => operationStore.getSingleRecord );
onMounted(() => operationStore.fetchAllOrSingle('cash-and-bank-register', 1));
</script>

<style lang="scss" scoped></style>
