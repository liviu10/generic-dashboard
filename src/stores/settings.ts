import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { StoreStateInterface } from 'src/interfaces/StoreStateInterface';
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';

const apiEndpointUrl = '/admin/settings';

enum ResourceName {
  'accepted-domains',
  'errors-and-notifications',
  'users',
  'user-role-types',
}

export const useSettingStore = defineStore('settingStore', {
  state: (): StoreStateInterface => {
    return {
      allRecords: {} as StoreApiResponseInterface['data'],
      singleRecord: {} as StoreApiResponseInterface['data'],
      resourceTitle: undefined,
      noDataMessage: undefined,
    };
  },
  getters: {
    getAllRecords: (state) => {
      return state.allRecords;
    },
    getSingleRecord: (state) => {
      return state.singleRecord;
    },
    getResourceTitle: (state) => {
      return state.resourceTitle;
    },
    getNoDataMessage: (state) => {
      return state.noDataMessage;
    },
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
              this.allRecords = data.data as StoreApiResponseInterface['data'];
            } else {
              this.singleRecord = data.data as StoreApiResponseInterface['data'];
            }
            this.resourceTitle = data.data.title;
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
