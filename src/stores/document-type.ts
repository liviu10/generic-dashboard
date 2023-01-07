import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ApiResponseInterface } from 'src/interfaces/ApiResponseInterface';

const apiBaseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_API_BASE_URL
    : process.env.PROD_API_BASE_URL;
const apiEndpointUrl = '/admin/configurations/document-types'

export const useDocumentTypeStore = defineStore('documentTypeStore', {
  state: () => ({
    allRecords: {} as ApiResponseInterface['data'],
    resourceTitle: undefined,
    noDataMessage: undefined,
  }),
  getters: {
    getAllRecords(state) {
      return state.allRecords;
    },
    getResourceTitle(state) {
      return state.resourceTitle;
    },
    getNoDataMessage(state) {
      return state.noDataMessage;
    },
  },
  actions: {
    async fetchAllRecords() {
      const data = await api
        .get(apiBaseUrl + apiEndpointUrl)
        .then((data) => {
          this.allRecords = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
  },
});
