<template>
  <q-page class="row items-center justify-evenly">
    Marketing page
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useMarketingStore } from 'src/stores/marketing';

// Import necessary interfaces
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

// Instantiate pinia store
const marketingStore = useMarketingStore();
// const getAllRecords = computed((): StoreApiResponseInterface['data'] => marketingStore.getAllRecords);
const getSingleRecords = computed((): StoreApiResponseInterface['data'] => marketingStore.getSingleRecord );
onMounted(() => marketingStore.fetchAllOrSingle('newsletter-campaigns', 1));
</script>

<style lang="scss" scoped></style>
