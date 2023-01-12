import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { StoreStateInterface } from 'src/interfaces/StoreStateInterface';
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

const apiEndpointUrl = '/admin/configurations';

enum ResourceName {
  'account-types',
  'countries',
  'counties',
  'cities',
  'company',
  'currency-codes',
  'document-types',
  'economic-activities',
  'product-types',
  'unit-of-measurements',
  'vat-types',
  'warehouse-types',
}

export const useConfigurationStore = defineStore('configurationStore', {
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
        if (['countries', 'counties', 'cities'].includes(resourceName)) {
          if (
            typeof resourceId === 'number' &&
            resourceId &&
            resourceId !== null
          ) {
            fullApiUrl.value =
              apiEndpointUrl + '/geography/' + resourceName + '/' + resourceId;
          } else {
            fullApiUrl.value = apiEndpointUrl + '/geography/' + resourceName;
          }
        } else {
          if (
            typeof resourceId === 'number' &&
            resourceId &&
            resourceId !== null
          ) {
            fullApiUrl.value =
              apiEndpointUrl + '/' + resourceName + '/' + resourceId;
          } else {
            fullApiUrl.value = apiEndpointUrl + '/' + resourceName;
          }
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
