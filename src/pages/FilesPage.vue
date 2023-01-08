<template>
  <q-page class="row items-center justify-evenly">
    Files page
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useFileStore } from 'src/stores/files';

// Instantiate pinia store
const fileStore = useFileStore();
// const getAllRecords = computed(() => fileStore.getAllRecords);
const getSingleRecords = computed(() => fileStore.getSingleRecord );
onMounted(() => fileStore.fetchAllOrSingle('accounts', 1));
</script>

<style lang="scss" scoped></style>
