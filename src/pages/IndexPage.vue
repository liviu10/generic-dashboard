<template>
  <q-page class="row items-center justify-evenly">
    <GenericTable
      :data="getAllRecords"
      :fullscreen="false"
      :loading="loadGenericTable"
      :bordered="true"
      :square="true"
      :separator="'cell'"
      :displayTitle="true"
      :displayActionColumn="getAllRecords ? true : false"
      :resourceTitle="getResourceTitle"
      :noDataLabel="getNoDataMessage"
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
