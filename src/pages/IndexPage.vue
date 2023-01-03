<template>
  <q-page class="row items-center justify-evenly">
    <GenericTable
      :data="getGenericApiResponse"
      :fullscreen="false"
      :loading="loadGenericTable"
      :bordered="true"
      :square="true"
      :separator="'cell'"
      :displayTitle="true"
      :title="'Generic table'"
      :displayActionColumn="true"
    />
  </q-page>
</template>

<script setup lang="ts">
import GenericTable from 'src/components/generic/GenericTable.vue';

import { Ref, ref, onMounted, computed } from 'vue';
import { useGenericStore } from 'src/stores/generic-store';

let loadGenericTable: Ref<boolean> = ref(false);
const store = useGenericStore();
const getGenericApiResponse = computed(() => {
  return store.getGenericApiResponse;
});

onMounted(() => {
  loadGenericTable.value = true;
  store.fetchGenericApiResponse();
  loadGenericTable.value = false;
});
</script>
