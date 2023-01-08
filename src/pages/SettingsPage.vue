<template>
  <q-page class="row items-center justify-evenly">
    Settings page: 
    <br>
    {{ getSingleRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
import { useSettingStore } from 'src/stores/settings';

// Instantiate pinia store
const settingStore = useSettingStore();
// const getAllRecords = computed(() => settingStore.getAllRecords );
const getSingleRecords = computed(() => settingStore.getSingleRecord );
onMounted(() => settingStore.fetchAllOrSingle('accepted-domains', 1) );
</script>

<style lang="scss" scoped></style>
