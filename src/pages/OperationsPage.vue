<template>
  <q-page class="row items-center justify-evenly">
    Operations page
    {{ getAllRecords }}
  </q-page>
</template>

<script setup lang="ts">
// Import framework's related utilities
import { computed, onMounted } from 'vue';

// Import pinia store
// import { useCashAndBankRegisterStore } from 'src/stores/cash-and-bank-register';
// import { useConsumptionReceiptStore } from 'src/stores/consumption-receipt';
// import { useInvoiceStore } from 'src/stores/invoice';
// import { useSaleInvoiceStore } from 'src/stores/sale-invoice';
import { useShippingNoteStore } from 'src/stores/shipping-note';

// Instantiate pinia store
// const cashAndBankRegisterStore = useCashAndBankRegisterStore();
// const consumptionReceiptStore = useConsumptionReceiptStore();
// const invoiceStore = useInvoiceStore();
// const saleInvoiceStore = useSaleInvoiceStore();
const shippingNoteStore = useShippingNoteStore();
// const getAllRecords = computed(() => cashAndBankRegisterStore.getAllRecords);
// const getAllRecords = computed(() => consumptionReceiptStore.getAllRecords);
// const getAllRecords = computed(() => invoiceStore.getAllRecords);
// const getAllRecords = computed(() => saleInvoiceStore.getAllRecords);
const getAllRecords = computed(() => shippingNoteStore.getAllRecords);
// onMounted(() => cashAndBankRegisterStore.fetchAllRecords());
// onMounted(() => consumptionReceiptStore.fetchAllRecords());
// onMounted(() => invoiceStore.fetchAllRecords());
// onMounted(() => saleInvoiceStore.fetchAllRecords());
onMounted(() => shippingNoteStore.fetchAllRecords());
</script>

<style lang="scss" scoped></style>
