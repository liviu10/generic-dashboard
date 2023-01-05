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
    singleRecord: {} as ApiResponseInterface['data'],
    resourceTitle: undefined,
    noDataMessage: undefined,
  }),
  getters: {
    getAllRecords(state) {
      return state.allRecords;
    },
    getSingleRecord(state) {
      return state.singleRecord;
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
    async createSingleRecord(payload: { domain: string; type: string }) {
      const data = await api
        .post(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains',
          payload
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
    async fetchSingleRecord(rowId: number) {
      const data = await api
        .get(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains/' +
            rowId
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
    async updateSingleRecord(payload: { domain: string; type: string }) {
      const data = await api
        .put(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains',
          payload
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
    async deleteSingleRecord(rowId: number) {
      const data = await api
        .delete(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains/' +
            rowId
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
    async restoreDeletedRecord(rowId: number) {
      const data = await api
        .get(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains/restore/' +
            rowId
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
          this.resourceTitle = data.data.title;
        })
        .catch((error) => {
          console.log(error.response);
          this.noDataMessage = error.response.data.description;
        });
      return data;
    },
    async orderAllRecords(column_name: string, order_type: string) {
      const data = await api
        .get(
          'http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains/order/' +
            column_name +
            '/' +
            order_type
        )
        .then((data) => {
          this.singleRecord = data.data as ApiResponseInterface['data'];
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
