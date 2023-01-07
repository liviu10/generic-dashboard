<template>
  <q-page class="row items-center justify-evenly">
    Configurations page
    {{ getAllRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
// import { useAccountTypeStore } from 'src/stores/account-type';
// import { useGeographyStore } from 'src/stores/geography';
// import { useCompanyStore } from 'src/stores/company';
// import { useCurrencyCodeStore } from 'src/stores/currency-code';
// import { useDocumentTypeStore } from 'src/stores/document-type';
// import { useEconomicActivityStore } from 'src/stores/economic-activity';
// import { useProductTypeStore } from 'src/stores/product-type';
// import { useUnitOfMeasurementStore } from 'src/stores/unit-of-measurement';
// import { useVatTypeStore } from 'src/stores/vat-type';
import { useWarehouseTypeStore } from 'src/stores/warehouse-type';

// Instantiate pinia store
// const accountTypeStore = useAccountTypeStore();
// const geographyStore = useGeographyStore();
// const companyStore = useCompanyStore();
// const currencyCodeStore = useCurrencyCodeStore();
// const documentTypeStore = useDocumentTypeStore();
// const economicActivityStore = useEconomicActivityStore();
// const productTypeStore = useProductTypeStore();
// const unitOfMeasurementStore = useUnitOfMeasurementStore();
// const vatTypeStore = useVatTypeStore();
const warehouseTypeStore = useWarehouseTypeStore();
// const getAllRecords = computed(() => accountTypeStore.getAllRecords);
// const getAllRecords = computed(() => geographyStore.getAllRecords);
// const getAllRecords = computed(() => companyStore.getAllRecords);
// const getAllRecords = computed(() => currencyCodeStore.getAllRecords);
// const getAllRecords = computed(() => documentTypeStore.getAllRecords);
// const getAllRecords = computed(() => economicActivityStore.getAllRecords);
// const getAllRecords = computed(() => productTypeStore.getAllRecords);
// const getAllRecords = computed(() => unitOfMeasurementStore.getAllRecords);
// const getAllRecords = computed(() => vatTypeStore.getAllRecords);
const getAllRecords = computed(() => warehouseTypeStore.getAllRecords);
// onMounted(() => accountTypeStore.fetchAllRecords());
// onMounted(() => geographyStore.fetchAllRecords('cities'));
// onMounted(() => companyStore.fetchAllRecords());
// onMounted(() => currencyCodeStore.fetchAllRecords());
// onMounted(() => documentTypeStore.fetchAllRecords());
// onMounted(() => economicActivityStore.fetchAllRecords());
// onMounted(() => productTypeStore.fetchAllRecords());
// onMounted(() => unitOfMeasurementStore.fetchAllRecords());
// onMounted(() => vatTypeStore.fetchAllRecords());
onMounted(() => warehouseTypeStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
