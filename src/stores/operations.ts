import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { StoreStateInterface } from 'src/interfaces/StoreStateInterface';
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

const apiEndpointUrl = '/admin/connect';

enum ResourceName {
  'cash-and-bank-register',
  'consumption-receipts',
  'invoices',
  'sales-invoices',
  'shipping-notes'
}

export const useOperationStore = defineStore('operationStore', {
  state: (): StoreStateInterface => {
    return {
      allRecords: {} as StoreApiResponseInterface['data'],
      singleRecord: {} as StoreApiResponseInterface['data'],
      resourceTitle: undefined,
      resourceDescription: undefined,
      noDataMessage: undefined,
    };
  },
  getters: {
    getAllRecords: (state) => state.allRecords,
    getSingleRecord: (state) => state.singleRecord,
    getResourceTitle: (state) => state.resourceTitle,
    getResourceDescription: (state) => state.resourceDescription,
    getNoDataMessage: (state) => state.noDataMessage,
  },
  actions: {
    async fetchAllOrSingle(resourceName: string, resourceId?: number | null) {
      if (
        typeof resourceName === 'string' &&
        Object.values(ResourceName).includes(resourceName)
      ) {
        const fullApiUrl = ref('');
        if (typeof resourceId === 'number' && resourceId && resourceId !== null) {
          fullApiUrl.value = apiEndpointUrl + '/' + resourceName + '/' + resourceId;
        } else {
          fullApiUrl.value = apiEndpointUrl + '/' + resourceName;
        }
        const data = await api
          .get(fullApiUrl.value)
          .then((data) => {
            if (!resourceId) {
              this.allRecords = data.data;
            } else {
              this.singleRecord = data.data;
            }
            this.resourceTitle = data.data.title;
            this.resourceDescription = data.data.description;
          })
          .catch((error) => {
            console.log(error.response);
            this.noDataMessage = error.response.data.description;
          });
        return data;
      } else {
        this.$reset();
      }
    },
  },
});
