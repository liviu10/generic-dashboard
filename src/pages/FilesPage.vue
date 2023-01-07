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
// import { useAccountStore } from 'src/stores/account';
// import { useClientStore } from 'src/stores/client';
// import { useProductStore } from 'src/stores/product';
import { useSupplierStore } from 'src/stores/supplier';

// Instantiate pinia store
// const accountStore = useAccountStore();
// const clientStore = useClientStore();
// const productStore = useProductStore();
const supplierStore = useSupplierStore();
// const getAllRecords = computed(() => accountStore.getAllRecords);
// const getAllRecords = computed(() => clientStore.getAllRecords);
// const getAllRecords = computed(() => productStore.getAllRecords);
const getAllRecords = computed(() => supplierStore.getAllRecords);
// onMounted(() => accountStore.fetchAllRecords());
// onMounted(() => clientStore.fetchAllRecords());
// onMounted(() => productStore.fetchAllRecords());
onMounted(() => supplierStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
