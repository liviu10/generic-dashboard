<template>
  <q-page class="row items-center justify-evenly">
    Configurations page
    <!-- {{ getAllRecords }} -->
    <br />
    <GenericTable
      :data="getAllRecords"
      :displayActionColumn="true"
      :displayActionCreate="true"
      :displayActionDelete="true"
      :displayActionEdit="true"
      :displayActionShow="true"
      :loading="false"
      :square="true"
    />
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useConfigurationStore } from 'src/stores/configurations';

// Import necessary components and interfaces
import GenericTable from 'src/components/generic/GenericTable.vue';
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

// Instantiate pinia store
const configurationStore = useConfigurationStore();
const getAllRecords = computed(
  (): StoreApiResponseInterface['data'] => configurationStore.getAllRecords
);
// const getSingleRecords = computed((): StoreApiResponseInterface['data'] => configurationStore.getSingleRecord);
onMounted(() => configurationStore.fetchAllOrSingle('currency-codes'));
</script>

<style lang="scss" scoped></style>
