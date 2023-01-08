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

// Instantiate pinia store
const marketingStore = useMarketingStore();
// const getAllRecords = computed(() => marketingStore.getAllRecords);
const getSingleRecords = computed(() => marketingStore.getSingleRecord );
onMounted(() => marketingStore.fetchAllOrSingle('newsletter-campaigns', 1));
</script>

<style lang="scss" scoped></style>
