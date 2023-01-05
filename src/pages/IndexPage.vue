<template>
  <q-page class="row items-center justify-evenly">
    <GenericTable
      :bordered="true"
      :data="getAllRecords"
      :displayActionColumn="getAllRecords ? true : false"
      :displayActionCreate="true"
      :displayActionDelete="true"
      :displayActionEdit="true"
      :displayActionShow="true"
      :displayTitle="true"
      :fullscreen="false"
      :loading="loadGenericTable"
      :noDataLabel="getNoDataMessage"
      :resourceTitle="getResourceTitle"
      :separator="'cell'"
      :square="true"
    />
  </q-page>
</template>

<script setup lang="ts">
import GenericTable from 'src/components/generic/GenericTable.vue';

import { Ref, ref, onMounted, computed } from 'vue';
import { useAcceptedDomainStore } from 'src/stores/accepted-domain';

let loadGenericTable: Ref<boolean> = ref(false);
const store = useAcceptedDomainStore();
const getAllRecords = computed(() => {
  return store.getAllRecords;
});
const getResourceTitle = computed(() => {
  return store.getResourceTitle;
});
const getNoDataMessage = computed(() => {
  return store.getNoDataMessage;
});

onMounted(() => {
  loadGenericTable.value = true;
  store.fetchAllRecords();
  loadGenericTable.value = false;
});
</script>
