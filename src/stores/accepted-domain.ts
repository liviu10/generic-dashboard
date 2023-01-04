import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export interface ApiResponseInterface {
  config: object;
  data: {
    description: string;
    records: object[];
    title: string;
  };
  headers: object;
  request: object;
  status: number;
  statusText: string;
}

export const useAcceptedDomainStore = defineStore('acceptedDomainStore', {
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
        .get('http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains')
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
