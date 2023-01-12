<template>
  <q-page class="row items-center justify-evenly">
    <!-- Marketing page -->
    <GenericTable
      :data="getAllRecords"
      :dense="true"
      :displayActionColumn="true"
      :displayActionCreate="true"
      :displayActionDelete="true"
      :displayActionEdit="true"
      :displayActionShow="true"
      :displayTitle="true"
      :fullscreen="false"
      :loading="false"
      :square="true"
      :separator="'cell'"
      :resourceTitle="getAllRecords ? getAllRecords.title : undefined"
      :resourceDescription="
        getAllRecords ? getAllRecords.description : undefined
      "
      :wrapCells="true"
    />
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useMarketingStore } from 'src/stores/marketing';

// Import necessary interfaces
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

// Import necessary components
import GenericTable from 'src/components/generic/GenericTable.vue';

// Instantiate pinia store
const marketingStore = useMarketingStore();
const getAllRecords = computed(
  (): StoreApiResponseInterface['data'] => marketingStore.getAllRecords
);
onMounted(() => marketingStore.fetchAllOrSingle('newsletter-campaigns'));
</script>

<style lang="scss" scoped></style>
