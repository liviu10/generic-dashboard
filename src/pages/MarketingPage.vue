<template>
  <q-page class="row items-center justify-evenly">
    Marketing page
    {{ getAllRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
// import { useContactMeStore } from 'src/stores/contact';
import { useNewsletterStore } from 'src/stores/newsletter';

// Instantiate pinia store
// const contactMeStore = useContactMeStore();
const newsletterStore = useNewsletterStore();
// const getAllRecords = computed(() => contactMeStore.getAllRecords);
const getAllRecords = computed(() => newsletterStore.getAllRecords);
// onMounted(() => contactMeStore.fetchAllRecords());
onMounted(() => newsletterStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
