import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export interface ApiResponseInterface {
  config: object;
  data: {
    description: string;
    records: object[];
    title: string;
  }
  headers: object;
  request: object;
  status: number;
  statusText: string;
}

export const useGenericStore = defineStore('genericStore', {
  state: () => ({
    genericApiResponse: {} as ApiResponseInterface['data'],
  }),
  getters: {
    getGenericApiResponse(state) {
      return state.genericApiResponse;
    },
  },
  actions: {
    async fetchGenericApiResponse() {
      try {
        const data = await api
          .get('http://127.0.0.1:8001/api/v1/admin/settings/accepted-domains')
          .then((data) => {
            this.genericApiResponse = data.data as ApiResponseInterface['data'];
            debugger;
          });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
