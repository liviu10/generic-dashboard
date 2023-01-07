<template>
  <q-page class="row items-center justify-evenly">
    Files page
    {{ getAllRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useWarehouseTypeStore } from 'src/stores/warehouse-type';

// Instantiate pinia store
const warehouseTypeStore = useWarehouseTypeStore();
const getAllRecords = computed(() => warehouseTypeStore.getAllRecords);
onMounted(() => warehouseTypeStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
