<template>
  <q-page class="row items-center justify-evenly">
    Settings page
    {{ getAllRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
// import { useAcceptedDomainStore } from 'src/stores/accepted-domain';
// import { useErrorAndNotificationStore } from 'src/stores/error-and-notification';
import { useUserStore } from 'src/stores/user';

// Instantiate pinia store
// const acceptedDomainStore = useAcceptedDomainStore();
// const errorAndNotificationStore = useErrorAndNotificationStore();
const userStore = useUserStore();
// const getAllRecords = computed(() => acceptedDomainStore.getAllRecords);
// const getAllRecords = computed(() => errorAndNotificationStore.getAllRecords);
const getAllRecords = computed(() => userStore.getAllRecords);
// onMounted(() => acceptedDomainStore.fetchAllRecords());
// onMounted(() => errorAndNotificationStore.fetchAllRecords());
onMounted(() => userStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
