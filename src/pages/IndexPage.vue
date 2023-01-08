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

// import { Ref, ref, onMounted, computed } from 'vue';
// import { useAcceptedDomainStore } from 'src/stores/accepted-domain';

let loadGenericTable: Ref<boolean> = ref(false);
// const acceptedDomainStore = useAcceptedDomainStore();
// const getAllRecords = computed(() => {
//   return acceptedDomainStore.getAllRecords;
// });
// const getSingleRecord = computed(() => {
//   return acceptedDomainStore.getSingleRecord;
// });
// const getResourceTitle = computed(() => {
//   return acceptedDomainStore.getResourceTitle;
// });
// const getNoDataMessage = computed(() => {
//   return acceptedDomainStore.getNoDataMessage;
// });

// onMounted(() => {
//   loadGenericTable.value = true;
//   acceptedDomainStore.fetchAllRecords();
//   acceptedDomainStore.createSingleRecord({
//     domain: 'cah',
//     type: 'local-environment',
//   });
//   acceptedDomainStore.fetchSingleRecord(23);
//   acceptedDomainStore.orderAllRecords('id', 'desc');
//   loadGenericTable.value = false;
// });
</script>
